import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from '../models/person';
import { PeopleService } from '../services/people.service';
import { debounceTime, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { searchComponentAnimations } from './search.component.animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'pf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: searchComponentAnimations
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  people: Person[];
  selectedPerson: Person;
  spinnerActive = false;
  totalResults = 0;
  pageSize = 10;
  pageIndex = 0;
  listClasses = {
    'one-line-paginator': true,
    'two-line-paginator': false
  };

  @ViewChild('paginator')
  paginatorEl: ElementRef;

  private unsubscribe: Subject<any> = new Subject<any>();
  private isDetailVisible = false;

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {

    this.initSearchForm();

    this.searchForm.valueChanges.pipe(
      debounceTime(1000),
      tap(() => this.spinnerActive = true),
      switchMap(values => this.peopleService.getPeopleWithSearch(values.search, this.pageIndex * this.pageSize, this.pageSize)),
      takeUntil(this.unsubscribe),
    ).subscribe(results => {
      this.spinnerActive = false;
      this.people = results.results;
      this.pageIndex = 0;
      this.totalResults = results.totalResultsCount;
      if (document.getElementById('paginator').offsetHeight === 56) {
        this.listClasses["one-line-paginator"] = true;
        this.listClasses["two-line-paginator"] = false;
      }
      else {
        this.listClasses["one-line-paginator"] = false;
        this.listClasses["two-line-paginator"] = true;
      }
    });
  }

  initSearchForm() {
    this.searchForm = this.fb.group({
      search: ''
    });
  }

  selectPerson(id: number) {
    this.spinnerActive = true;
    this.peopleService.getPersonDetail(id).pipe(
      takeUntil(this.unsubscribe)
    ).subscribe(person => {
      this.selectedPerson = person;
      this.spinnerActive = false;
      this.isDetailVisible = true;
    })
  }

  getComponentState() {
    if (this.breakpointObserver.isMatched('(min-width: 600px)')) {
      return this.isDetailVisible ? 'sidePanelSearch' : 'fullScreenSearch';
    }
    else {
      return this.isDetailVisible ? 'fullScreenDetail' : 'fullScreenSearchMobile';
    }
  }

  closeDetail() {
    this.isDetailVisible = false;
    this.selectedPerson = null;
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.peopleService.getPeopleWithSearch(this.searchForm.value.search, this.pageIndex * this.pageSize, this.pageSize).pipe(
      takeUntil(this.unsubscribe),
    ).subscribe(results => {
      this.spinnerActive = false;
      this.people = results.results;
      this.totalResults = results.totalResultsCount;
      
      if (document.getElementById('paginator').offsetHeight === 56) {
        this.listClasses["one-line-paginator"] = true;
        this.listClasses["two-line-paginator"] = false;
      }
      else {
        this.listClasses["one-line-paginator"] = false;
        this.listClasses["two-line-paginator"] = true;
      }
    });
  }

}
