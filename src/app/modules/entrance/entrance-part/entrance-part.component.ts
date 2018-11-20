import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-entrance-page',
  templateUrl: './entrance-part.component.html',
  styleUrls: ['./entrance-part.component.scss']
})
export class EntrancePartComponent implements OnInit {
  selectLang: string = 'ru';

  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang('ru');
    translate.use('ru');
  }

  ngOnInit() {
  }

  choosePosition(position: string) {
    localStorage.setItem('position', position);
    this.router.navigate([`/welcome-page/steps/login`]);
  }

  switchLanguage(language: string) {
    this.selectLang = language;
    this.translate.use(language);
  }


}
