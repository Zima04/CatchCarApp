import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CabinetDriverComponent} from './cabinet-driver.component';
import {DriverBoardComponent} from './driver-board/driver-board.component';
import {DriverHistoryComponent} from './driver-history/driver-history.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'layout'},
  {
    path: 'layout', component: CabinetDriverComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'board'},
      {path: 'board', pathMatch: 'full', component: DriverBoardComponent},
      {path: 'driver-history', pathMatch: 'full', component: DriverHistoryComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetDriverRoutingModule {
}
