import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './settings/settings.component';
import {HistoryComponent} from './history/history.component';
import {BoardComponent} from './board/board.component';
import {CabinetPassengerRoutingModule} from './cabinet-passenger-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CabinetPassengerComponent} from './cabinet-passenger.component';
import {MapService} from '../../services/map-service.service';

@NgModule({
  declarations: [
    SettingsComponent,
    HistoryComponent,
    BoardComponent,
    CabinetPassengerComponent,
  ],
  imports: [
    CommonModule,
    CabinetPassengerRoutingModule,
    SharedModule,
  ],
  providers: [MapService],
})
export class CabinetPassengerModule {
}
