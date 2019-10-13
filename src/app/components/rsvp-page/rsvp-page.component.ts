import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-rsvp-page',
  templateUrl: './rsvp-page.component.html',
  styleUrls: ['./rsvp-page.component.sass']
})
export class RsvpPageComponent implements OnInit {
  rsvpControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
