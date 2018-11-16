import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  exit() {
    this.router.navigate([`welcome-page`]);
  }

}
