import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() burgerState = new EventEmitter();

  selectLang: string = 'ru';
  personName: string = 'Виктор Грачев';
  theme: string;

  constructor(private translate: TranslateService) {
    this.theme = 'light';
    console.log(this.translate.currentLang);
    if (this.translate.currentLang === 'ru' || !this.translate.currentLang) {
      this.selectLang = 'ru';
      this.translate.use('ru');
    }
    else {
      this.selectLang = 'en';
      this.translate.use('en');
    }
  }

  ngOnInit() {
  }

  onClickBurger(event) {
    this.burgerState.emit(event);
  }

  switchLanguage(language: string) {
    this.selectLang = language;
    this.translate.use(language);
  }

}
