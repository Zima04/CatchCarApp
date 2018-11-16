import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageUploaderOptions} from 'ngx-image-uploader';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-driver-board',
  templateUrl: './driver-board.component.html',
  styleUrls: ['./driver-board.component.scss']
})
export class DriverBoardComponent implements OnInit {

  @ViewChild('searchStart')
  public searchStartPositionElementRef: ElementRef;
  @ViewChild('searchFinish')
  public searchFinishPositionElementRef: ElementRef;

  selectDriverInfo: Driver;
  numberDriver: number;

  driversInformation: Driver[] = [
    {
      name: 'Семенова Анна',
      dateTrip: '27.10.2018',
      timeTrip: '10:00',
      start: {lat: 53.9412651, lng: 27.6880516},
      finish: {lat: 53.8663053, lng: 27.4937871},
      carName: 'Siat Tiago,2011',
      everydayTrip: false,
      aboutDriver: 'Еду быстро и надежно, каждое утро на Уручье.Оплату принимаю печенками :)',
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

  options: ImageUploaderOptions = {
    thumbnailHeight: 100,
    thumbnailWidth: 100,
    uploadUrl: 'http://some-server.com/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };

  public editForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.changeWay(0);
    this.editForm = this.fb.group({
      name: [this.driversInformation[0].name, [Validators.required]],
      phone: [this.driversInformation[0].phoneNumber, [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      description: [this.driversInformation[0].aboutDriver, [Validators.required]],
      car: [this.driversInformation[0].carName, [Validators.required]],
    });
  }

  ngAfterViewInit() {
    const button = document.getElementsByClassName('add-image-btn');
    const textnode = document.createTextNode('Добавить');
    setTimeout(function () {
      while (button[0].childNodes[0].firstChild) {
        button[0].childNodes[0].removeChild(button[0].childNodes[0].firstChild);
      }
      button[0].childNodes[0].appendChild(textnode);
    }), 100;
  }

  changeWay(driverNumber) {
    this.selectDriverInfo = this.driversInformation[driverNumber];
    this.numberDriver = driverNumber;
    // this.mapService.updateMap({start: this.driversInformation[driverNumber].start, finish: this.driversInformation[driverNumber].finish});
  }
}

export class Driver {
  name: string;
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
