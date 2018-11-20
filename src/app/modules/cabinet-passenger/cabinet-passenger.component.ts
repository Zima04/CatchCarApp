import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'cabinet-passenger',
  templateUrl: './cabinet-passenger.component.html',
  styleUrls: ['./cabinet-passenger.component.scss']
})
export class CabinetPassengerComponent implements OnInit {

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
      url: 'history',
    },
    {
      name: 'Settings',
      icon: 'fa fa-cog',
      url: 'settings',
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
