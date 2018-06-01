import { Component, OnInit, Output, EventEmitter, Input, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Person } from '../models/person';
import { Subject, Observable, of, fromEvent } from 'rxjs';
import { map, pairwise, filter, exhaustMap, startWith, takeUntil } from 'rxjs/operators';


interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
};

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
  sH: 0,
  sT: 0,
  cH: 0
};

@Component({
  selector: 'pf-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnDestroy, AfterViewInit {

  @Output()
  itemSelected = new EventEmitter<number>();

  @Output()
  scrollBottom = new EventEmitter<boolean>();

  @Input()
  people: Person[] = [];

  @Input()
  scrollToBottom;

  private unsubscribe = new Subject<any>();
  private scrollEvent;
  scrollPercent = 70;

  @ViewChild('scrollWindow') scrollEl: ElementRef;

  public selectedID = 0;

  constructor(private elm: ElementRef) { }

  ngAfterViewInit() {
    this.registerScrollEvent();
  }

  ngOnDestroy() {
    this.unsubscribe.next(false);
    this.unsubscribe.complete();
  }

  private registerScrollEvent() {
    this.scrollEvent = fromEvent(this.scrollEl.nativeElement, 'scroll').pipe(
      map((event: any): ScrollPosition => ({
        sH: event.target.scrollHeight,
        sT: event.target.scrollTop,
        cH: event.target.clientHeight
      })),
      pairwise(),
      filter(positions =>
        this.isUserScrollingDown(positions)
        && this.isScrollExpectedPercent(positions[1])
      ),
      startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]),
      exhaustMap(value => of(true)),
      takeUntil(this.unsubscribe),
    ).subscribe(value => {
      if (this.scrollToBottom) {
        this.scrollToBottom(value)
      }
    });
  }

  private isUserScrollingDown = (positions) => {
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position) => {
    return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
  }

  onItemSelected(id: number) {
    this.selectedID = id;
    this.itemSelected.emit(id);
  }

}
