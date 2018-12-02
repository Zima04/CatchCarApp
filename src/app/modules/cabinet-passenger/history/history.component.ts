import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpService} from '../../../services/http.service';
import {Observable, ObservableInput} from 'rxjs';

export interface UserData {
  id: string;
  name: string;
  date: string;
}

/** Constants used to fill up our data base. */
const DATES: string[] = ['23.10.2018', '02.08.2018', '01.07.2018', '13.10.2018', '15.04.2018', '26.10.2018', '17.12.2018'];
const NAMES: string[] = ['Мария', 'Антон', 'Петр', 'Владислав', 'Ольга', 'Наталья',
  'Максим', 'Анжела', 'Кирилл', 'Алексей', 'Татьяна', 'Каспер',
  'Владимир', 'Моника', 'Екатерина', 'София', 'Ратибор', 'Том', 'Иесус'];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'date', 'phone'];
  dataSource: MatTableDataSource<UserData>;
  trips: any = [];
  names: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpService: HttpService) {
    this.httpService.getAllTrips().subscribe(res => {
      this.trips = res;
      console.log(this.trips);
      this.trips.forEach(item => {
        item.name = item.user.ruName;
      });
      console.log(this.trips);
      this.dataSource = new MatTableDataSource(this.trips);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // Assign the data to the data source for the table to render

  }

  ngOnInit() {

    console.log(this.trips);

  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      // this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    date: DATES[Math.round(Math.random() * (DATES.length - 1))]
  };

}
