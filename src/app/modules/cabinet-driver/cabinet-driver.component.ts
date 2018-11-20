import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'cabinet-driver',
  templateUrl: './cabinet-driver.component.html',
  styleUrls: ['./cabinet-driver.component.scss']
})
export class CabinetDriverComponent implements OnInit {

  selectLink = 0;
  links = [
    {
      name: 'Main Page',
      icon: 'fa fa-list-alt',
      url: 'board',
    },
    {
      name: 'Travel history',
      icon: 'fa fa-road',
      url: 'driver-history',
    },
  ];

  theme: string;

  constructor(private router: Router) {
    this.theme = environment.theme;
  }

  ngOnInit() {
  }

  exit() {
    this.router.navigate([`welcome-page`]);
  }
}
