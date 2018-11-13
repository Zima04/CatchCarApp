import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {SettingsComponent} from './settings/settings.component';
import {HistoryComponent} from './history/history.component';
import {BoardComponent} from './board/board.component';
import {CabinetPassengerRoutingModule} from './cabinet-passenger-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CabinetPassengerComponent} from './cabinet-passenger.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SettingsComponent,
    HistoryComponent,
    BoardComponent,
    CabinetPassengerComponent,
  ],
  imports: [
    CommonModule,
    CabinetPassengerRoutingModule,
    SharedModule,
  ]
})
export class CabinetPassengerModule { }
