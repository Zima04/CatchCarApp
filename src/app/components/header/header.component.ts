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
  personName: string;
  ru_name: string = 'Виктор Грачев';
  en_name: string = 'Victor Grachev';

  constructor(private translate: TranslateService) {
    if (this.translate.currentLang === 'ru' || !this.translate.currentLang) {
      this.selectLang = 'ru';
      this.personName = this.ru_name;
      this.translate.use('ru');
    }
    else {
      this.selectLang = 'en';
      this.translate.use('en');
      this.personName = this.en_name;
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
    if (language === 'ru')
      this.personName = this.ru_name;
    else
      this.personName = this.en_name;
  }

}
