import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapService} from '../../../services/map-service.service';
import {MatDatepickerInputEvent} from '@angular/material';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

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
  selectDriverInfo: Driver;
  numberDriver: number;
  alert: Alert = new Alert();
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
        stars: 4,
        description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
      },
        {
          author: 'Мария Акакиевич',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Ольга Петрова',
          stars: 5,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Петр Вальштейн',
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
        stars: 4,
        description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
      },
        {
          author: 'Мария Акакиевич',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Ольга Петрова',
          stars: 5,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Петр Вальштейн',
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
        stars: 4,
        description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
      },
        {
          author: 'Мария Акакиевич',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Ольга Петрова',
          stars: 5,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Петр Вальштейн',
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
        stars: 4,
        description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
      },
        {
          author: 'Мария Акакиевич',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Ольга Петрова',
          stars: 5,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
        {
          author: 'Петр Вальштейн',
          stars: 2,
          description: 'Отличный водитель.Просто пулемёт.Интересный баблабол'
        },
      ],
    },
  ];

  constructor(private mapService: MapService, private translate: TranslateService) {
    this.driversInformation.forEach(driver => {
      if (translate.currentLang === 'ru' || !translate.currentLang) driver.name = driver.ru_name;
      else driver.name = driver.en_name;
    });
  }


  ngOnInit() {
    // this.changeWay(0);
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
        this.driversInformation.forEach(driver => {
          if (event.lang === 'ru') driver.name = driver.ru_name;
          else driver.name = driver.en_name;
        });
      });
  }


  changeWay(driverNumber) {
    this.selectDriverInfo = this.driversInformation[driverNumber];
    this.numberDriver = driverNumber;
    this.mapService.updateMap({start: this.driversInformation[driverNumber].start, finish: this.driversInformation[driverNumber].finish});
  }

  changeTime(event: string) {
    this.timeTrip = event;
  }

  changeDate(event: MatDatepickerInputEvent<Date>) {
    this.dateTrip = event.value;
  }

  createTrip() {
    this.changeWay(0);
    const sendToServerTripInfo = {
      startPoint: this.searchStartPositionElementRef.nativeElement.value,
      endPoint: this.searchFinishPositionElementRef.nativeElement.value,
      time: this.timeTrip,
      date: this.dateTrip,
    };
    console.log(sendToServerTripInfo);
  }

  confirmTrip() {
    this.alert = {
      type: 'success',
      msg: `Вы добавили заявку на поездку (добавлено: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    };
    const sendToServerTripInfo = {
      startPoint: this.searchStartPositionElementRef.nativeElement.value,
      endPoint: this.searchFinishPositionElementRef.nativeElement.value,
      time: this.timeTrip,
      date: this.dateTrip,
    };
    console.log(sendToServerTripInfo);
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
  stars: number;
  description: string;
}

export class Alert {
  type: string;
  msg: string;
  timeout: number;
}
