import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapService} from '../../../services/map-service.service';
import {MatDatepickerInputEvent} from '@angular/material';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {AlertComponent} from 'ngx-bootstrap';
import {HttpClient} from '@angular/common/http';
import {filter, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  @ViewChild('searchStart')
  public searchStartPositionElementRef: ElementRef;
  @ViewChild('searchFinish')
  public searchFinishPositionElementRef: ElementRef;

  dateTrip: Date = new Date();
  timeTrip: string;
  selectDriverInfo: any;
  numberDriver: number;
  alerts: any[] = [];
  driversInformation: Driver[] = [
    {
      name: 'Александров Петр',
      ru_name: 'Александров Петр',
      en_name: 'Alexandrov Petr',
      dateTrip: '29.10.2018',
      timeTrip: '15:45',
      start: {lat: 53.91900254, lng: 27.56883707},
      finish: {lat: 53.89554162, lng: 27.50017252},
      carName: 'BMW F10,2017',
      everydayTrip: true,
      aboutDriver: '  Еду быстро и надежно, каждое утро на Уручье.Оплату принимаю печенками :)',
      phoneNumber: '+375-29-292-24-02',
      reviews: [{
        author: 'Анна Коренина',
        ru_author: 'Анна Коренина',
        en_author: 'Anna Korenina',
        stars: 4,
        description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
      },
        {
          author: 'Мария Акакиевич',
          ru_author: 'Мария Акакиевич',
          en_author: 'Maria Akakievich',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Ольга Петрова',
          ru_author: 'Ольга Петрова',
          en_author: 'Olga Petrova',
          stars: 5,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Петр Вальштейн',
          ru_author: 'Петр Вальштейн',
          en_author: 'Petr Valshtein',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
      ],
    },
    {
      name: 'Евдокимов Олег',
      ru_name: 'Евдокимов Олег',
      en_name: 'Evdokimov Oleg',
      dateTrip: '15.10.2018',
      timeTrip: '23:45',
      start: {lat: 53.9052831, lng: 27.5391841},
      finish: {lat: 53.9039455, lng: 27.5524449},
      carName: 'Audi A8,2017',
      everydayTrip: false,
      aboutDriver: '  Еду быстро и надежно, каждое утро на Уручье.Оплату принимаю печенками :)',
      phoneNumber: '+375-29-292-24-02',
      reviews: [{
        author: 'Анна Коренина',
        ru_author: 'Анна Коренина',
        en_author: 'Anna Korenina',
        stars: 4,
        description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
      },
        {
          author: 'Мария Акакиевич',
          ru_author: 'Мария Акакиевич',
          en_author: 'Maria Akakievich',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Ольга Петрова',
          ru_author: 'Ольга Петрова',
          en_author: 'Olga Petrova',
          stars: 5,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Петр Вальштейн',
          ru_author: 'Петр Вальштейн',
          en_author: 'Petr Valshtein',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
      ],
    },
    {
      name: 'Семенова Анна',
      ru_name: 'Семенова Анна',
      en_name: 'Semenova Anna',
      dateTrip: '27.10.2018',
      timeTrip: '10:00',
      start: {lat: 53.9412651, lng: 27.6880516},
      finish: {lat: 53.8663053, lng: 27.4937871},
      carName: 'Siat Tiago,2011',
      everydayTrip: false,
      aboutDriver: '  Еду быстро и надежно, каждое утро на Уручье.Оплату принимаю печенками :)',
      phoneNumber: '+375-29-292-24-02',
      reviews: [{
        author: 'Анна Коренина',
        ru_author: 'Анна Коренина',
        en_author: 'Anna Korenina',
        stars: 4,
        description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
      },
        {
          author: 'Мария Акакиевич',
          ru_author: 'Мария Акакиевич',
          en_author: 'Maria Akakievich',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Ольга Петрова',
          ru_author: 'Ольга Петрова',
          en_author: 'Olga Petrova',
          stars: 5,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Петр Вальштейн',
          ru_author: 'Петр Вальштейн',
          en_author: 'Petr Valshtein',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
      ],
    },
    {
      name: 'Титевук Константин',
      ru_name: 'Титевук Константин',
      en_name: 'Titevuk Konstantin',
      dateTrip: '29.10.2018',
      timeTrip: '18:20',
      start: {lat: 53.8663053, lng: 27.5494088},
      finish: {lat: 53.8393437, lng: 27.5009965},
      carName: 'Volvo S70,2014',
      everydayTrip: true,
      aboutDriver: '  Еду быстро и надежно, каждое утро на Уручье.Оплату принимаю печенками :)',
      phoneNumber: '+375-29-292-24-02',
      reviews: [{
        author: 'Анна Коренина',
        ru_author: 'Анна Коренина',
        en_author: 'Anna Korenina',
        stars: 4,
        description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
      },
        {
          author: 'Мария Акакиевич',
          ru_author: 'Мария Акакиевич',
          en_author: 'Maria Akakievich',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Ольга Петрова',
          ru_author: 'Ольга Петрова',
          en_author: 'Olga Petrova',
          stars: 5,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Петр Вальштейн',
          ru_author: 'Петр Вальштейн',
          en_author: 'Petr Valshtein',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
      ],
    },
  ];
  trips: Observable<any>;
  _trips: any;
  reviews: Observable<Object>;
  _reviews: any;

  constructor(private mapService: MapService, private translate: TranslateService, private httpService: HttpService) {
    this.driversInformation.forEach(driver => {
      if (translate.currentLang === 'ru' || !translate.currentLang) {
        driver.name = driver.ru_name;
        driver.reviews.forEach(review => {
          review.author = review.ru_author;
        });
      } else {
        driver.name = driver.en_name;
        driver.reviews.forEach(review => {
          review.author = review.en_author;
        });
      }
    });
  }


  ngOnInit() {
    // this.changeWay(0);
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        this.driversInformation.forEach(driver => {
          if (event.lang === 'ru') {
            driver.name = driver.ru_name;
            driver.reviews.forEach(review => {
              review.author = review.ru_author;
            });
          } else {
            driver.name = driver.en_name;
            driver.reviews.forEach(review => {
              review.author = review.en_author;
            });
          }
        });
      });
  }


  changeWay(driverNumber) {
    this.httpService.getSelectDriverInfo(driverNumber).subscribe(res => {
      console.log(res);
      this.selectDriverInfo = res;
      this.numberDriver = driverNumber;

      this.mapService.updateMap({start: this._trips[driverNumber].start, finish: this._trips[driverNumber].end});
    });
  }

  changeTime(event: string) {
    this.timeTrip = event;
  }

  changeDate(event: MatDatepickerInputEvent<Date>) {
    this.dateTrip = event.value;
  }

  createTrip() {
    const sendToServerTripInfo = {
      startPoint: this.searchStartPositionElementRef.nativeElement.value,
      endPoint: this.searchFinishPositionElementRef.nativeElement.value,
      time: this.timeTrip,
      date: this.dateTrip,
    };
    this.trips = this.httpService.get10Trips();
    this.trips.subscribe(res => {
      this._trips = res;
      console.log(this._trips);
      this.changeWay(0);
    });


  }

  confirmTrip() {
    this.alerts.push({
      type: 'success',
      msg: `Вы добавили заявку на поездку (добавлено: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
    const sendToServerTripInfo = {
      startPoint: this.searchStartPositionElementRef.nativeElement.value,
      endPoint: this.searchFinishPositionElementRef.nativeElement.value,
      time: this.timeTrip,
      date: this.dateTrip,
    };
    console.log(sendToServerTripInfo);
  }

  deleteDriver(number) {
    console.log(number);
    this.trips = this.trips.pipe(map(item => {
      return item.filter(driver => driver.id !== number);
    }));
    this.alerts.push({
      type: 'danger',
      msg: `Данный водитель больше не будет показываться (добавлено: ${new Date().toLocaleTimeString()})`,
      timeout: 3000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}

export class Driver {
  name: string;
  ru_name: string;
  en_name: string;
  dateTrip: string;
  timeTrip: string;
  carName: string;
  everydayTrip: boolean;
  aboutDriver: string;
  phoneNumber: string;
  start: object;
  finish: object;
  reviews: Review[];
}

export class Review {
  author: string;
  ru_author: string;
  en_author: string;
  stars: number;
  description: string;
}
