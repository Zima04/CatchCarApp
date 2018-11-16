import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MapService} from '../../services/map-service.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() burgerState = new EventEmitter();

  constructor( private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  onClickBurger(event) {
    this.burgerState.emit(event);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
