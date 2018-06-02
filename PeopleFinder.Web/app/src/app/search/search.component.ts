import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonDetails } from '../models/person-details';
import { PersonService } from '../services/person.service';
import { Subject, Observable, timer } from 'rxjs';
import { takeUntil, share, debounce, tap, switchMap, map, first, filter } from 'rxjs/operators'
import { FormControl } from '@angular/forms';
import { Person } from '../models/person';

@Component({
  selector: 'pf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  selectedPerson: PersonDetails = null;
  selectedID: number = 0;
  peopleList: Person[] = [];
  unsubscribe = new Subject<any>();
  scroll: Subject<boolean>;
  scrollObservable: Observable<boolean>;
  searchTerms: FormControl;
  searchTermsObservable: Observable<string>;
  bottomOfPageObservable;
  bottomOfPageSubscription;
  listSpinnerState: boolean = true;

  subscriptionFunction = people => {
    this.peopleList = people;
    this.listSpinnerState = false;
    this.bottomOfPageObservable.subscribe(this.subscriptionFunction);
  };

  constructor(private personService: PersonService)
  {
    this.scroll = new Subject<boolean>();
    this.scrollObservable = this.scroll.asObservable();
  }

  ngOnInit() {
    this.searchTerms = new FormControl();
    this.setupSearchTermsObservable();
    this.setupBottomOfPageObservable();
  }

  setupSearchTermsObservable() {
    this.searchTermsObservable = this.searchTerms.valueChanges.pipe(
      debounce(() => timer(1000)),
      tap(value => {
        this.listSpinnerState = true;
        this.onItemSelected(0);
      }),
      map(value => <string>value),
    );

    this.searchTermsObservable.pipe(
      switchMap(value => this.personService.getWithSearch(value, true)),
      takeUntil(this.unsubscribe)
    ).subscribe(this.subscriptionFunction);
  }

  setupBottomOfPageObservable() {
    this.bottomOfPageObservable = this.scrollObservable.pipe(
      first(),
      tap(value => this.listSpinnerState = true),
      switchMap(value => this.personService.getWithSearch(this.searchTerms.value)),
      takeUntil(this.unsubscribe),
      takeUntil(this.searchTermsObservable),
    );

    this.bottomOfPageSubscription = this.bottomOfPageObservable.subscribe(this.subscriptionFunction);
  }

  onItemSelected(id: number) {
    this.personService.getByID(id).pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(person => this.selectedPerson = person);

    this.selectedID = id;
  }

  onScrollList = (value: boolean) => {
    if (this.scroll) {
      this.scroll.next(value);
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

}
