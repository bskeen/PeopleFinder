import { Component, HostListener, EventEmitter, Output, Input } from '@angular/core';
import { HoverAnimations } from './person-list-item.animations';
import { Person } from '../models/person';

@Component({
  selector: 'pf-person-list-item',
  templateUrl: './person-list-item.component.html',
  styleUrls: ['./person-list-item.component.scss'],
  animations: HoverAnimations
})
export class PersonListItemComponent {
  public state;
  private selected: boolean = false;

  @Input()
  person: Person;

  @Output()
  listItemSelected = new EventEmitter<number>();

  constructor() {
    this.state = 'default';
  }

  @HostListener('mouseenter')
  onEnter() {
    if (!this.selected) {
        this.state = 'hover';
    }
  }

  @HostListener('mouseleave')
  onExit() {
  if (!this.selected) {
      this.state = 'default';
    }
  }

  @HostListener('click')
  onClick() {
    this.listItemSelected.emit(this.person.id);
  }

  @Input('currentSelectedID')
  set currentSelectedID(id: number) {
    this.selected = id === this.person.id;
    if (this.selected) {
      this.state = 'selected';
    }
    else if (this.state === 'selected') {
      this.state = 'default';
    }
  }
}
