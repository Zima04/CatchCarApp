import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {SettingsComponent} from './settings/settings.component';
import {HistoryComponent} from './history/history.component';
import {CabinetPassengerComponent} from './cabinet-passenger.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'layout'},
  {
    path: 'layout', component: CabinetPassengerComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'board'},
      {path: 'board', pathMatch: 'full', component: BoardComponent},
      {path: 'settings', pathMatch: 'full', component: SettingsComponent},
      {path: 'history', pathMatch: 'full', component: HistoryComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinetPassengerRoutingModule {
}
