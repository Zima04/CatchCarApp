import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'cabinet-passenger',
  templateUrl: './cabinet-passenger.component.html',
  styleUrls: ['./cabinet-passenger.component.scss']
})
export class CabinetPassengerComponent implements OnInit {
  showFiller = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  exit() {
    this.router.navigate([`welcome-page`]);
  }

}
