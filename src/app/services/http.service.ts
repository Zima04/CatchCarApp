import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, take, tap} from 'rxjs/operators';

@Injectable()

export class HttpService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  get10Trips() {
    return this.http.get<[any]>('http://localhost:3000/trip').pipe(map(res => res.slice(0, 10)));
  }

  getAllTrips() {
    return this.http.get<[any]>('http://localhost:3000/trip?top=100').pipe(map(res => {
      return res;
    }));
  }

  getAllReviewers() {
    return this.http.get('http://localhost:3000/review').pipe(map(res => {
      return res;
    }));
  }

  getSelectDriverInfo(id: number) {
    return this.http.get(`http://localhost:3000/review?userId=${id}`).pipe(map(res => {
      return res;
    }));
  }

}
