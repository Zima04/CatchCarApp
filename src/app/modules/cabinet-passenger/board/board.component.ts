import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  drivers: string[] = ['Александров Петр', 'Евдокимов Олег', 'Семенова Анна', 'Титевук Константин'];

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
    },
    {
      name: 'California',
      population: '39.14M',
    },
    {
      name: 'Florida',
      population: '20.27M',
    },
    {
      name: 'Texas',
      population: '27.47M',
    }
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
  }
}

interface State {
  name: string;
  population: string;
}
