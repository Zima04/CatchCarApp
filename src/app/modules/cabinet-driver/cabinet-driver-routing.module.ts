import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CabinetDriverComponent} from './cabinet-driver.component';
import {DriverBoardComponent} from './driver-board/driver-board.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'layout'},
  {
    path: 'layout', component: CabinetDriverComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'board'},
      {path: 'board', pathMatch: 'full', component: DriverBoardComponent},
      // {path: 'settings', pathMatch: 'full', component: SettingsComponent},
      // {path: 'history', pathMatch: 'full', component: HistoryComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetDriverRoutingModule {
}
