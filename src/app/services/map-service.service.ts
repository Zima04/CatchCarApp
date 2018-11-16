import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()

export class MapService implements OnInit {
  private mapState = new BehaviorSubject({});

  constructor() {

  }

  ngOnInit() {
  }

  updateMap(obj) {
    this.mapState.next(obj);
  }

  getState(): Observable<any> {
    return this.mapState.asObservable();
  }


}
