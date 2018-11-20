import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'entrace-page',
  templateUrl: './entrance-page.component.html',
  styleUrls: ['./entrance-page.component.scss']
})
export class EntrancePageComponent implements OnInit {
  theme: string;

  constructor() {
    this.theme = environment.theme;
  }

  ngOnInit() {
  }

}
