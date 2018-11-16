import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'cabinet-driver',
  templateUrl: './cabinet-driver.component.html',
  styleUrls: ['./cabinet-driver.component.scss']
})
export class CabinetDriverComponent implements OnInit {

  selectLink = 0;
  links = [
    {
      name: 'Главная',
      icon: 'fa fa-list-alt',
      url: 'board',
    },
    {
      name: 'История поездок',
      icon: 'fa fa-road',
      url: 'history',
    },
    {
      name: 'Настройки',
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
