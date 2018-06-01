import { Component, OnInit, Input } from '@angular/core';
import { PersonDetails } from '../models/person-details';

@Component({
  selector: 'pf-person-display',
  templateUrl: './person-display.component.html',
  styleUrls: ['./person-display.component.scss']
})
export class PersonDisplayComponent implements OnInit {

  @Input()
  selectedPerson: PersonDetails = null;

  constructor() { }

  ngOnInit() {
  }

}
