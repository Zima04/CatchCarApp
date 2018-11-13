import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() burgerState = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClickBurger(event) {
    this.burgerState.emit(event);
  }

}
