import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CabinetDriverRoutingModule} from './cabinet-driver-routing.module';
import {CabinetDriverComponent} from './cabinet-driver.component';
import {DriverBoardComponent} from './driver-board/driver-board.component';
import {MapService} from '../../services/map-service.service';
import {DriverHistoryComponent} from './driver-history/driver-history.component';

@NgModule({
  declarations: [
    CabinetDriverComponent,
    DriverHistoryComponent,
    DriverBoardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CabinetDriverRoutingModule,
  ],
  providers: [MapService]
})
export class CabinetDriverModule {
}
