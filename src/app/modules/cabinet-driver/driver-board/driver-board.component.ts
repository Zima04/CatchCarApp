import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageUploaderOptions} from 'ngx-image-uploader';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-driver-board',
  templateUrl: './driver-board.component.html',
  styleUrls: ['./driver-board.component.scss']
})
export class DriverBoardComponent implements OnInit, AfterViewInit {

  @ViewChild('searchStart')
  public searchStartPositionElementRef: ElementRef;
  @ViewChild('searchFinish')
  public searchFinishPositionElementRef: ElementRef;

  selectDriverInfo: Driver;
  numberDriver: number;

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
  alerts: any[] = [];
  dateTrip: Date = new Date();
  timeTrip: string;

  options: ImageUploaderOptions = {
    thumbnailHeight: 100,
    thumbnailWidth: 100,
    uploadUrl: 'http://some-server.com/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };

  public editForm: FormGroup;

  constructor(private fb: FormBuilder, private translate: TranslateService) {
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
    this.editForm = this.fb.group({
      name: [this.driversInformation[0].name, [Validators.required]],
      phone: [this.driversInformation[0].phoneNumber, [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      description: [this.driversInformation[0].aboutDriver, [Validators.required]],
      car: [this.driversInformation[0].carName, [Validators.required]],
    });
  }

  ngAfterViewInit() {
    const button = document.getElementsByClassName('add-image-btn');
    const textnode = document.createTextNode('+');
    setTimeout(function () {
      while (button[0].childNodes[0].firstChild) {
        button[0].childNodes[0].removeChild(button[0].childNodes[0].firstChild);
      }
      button[0].childNodes[0].appendChild(textnode);
    }), 100;
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
