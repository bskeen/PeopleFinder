import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'pf-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit(true);
  }

}
