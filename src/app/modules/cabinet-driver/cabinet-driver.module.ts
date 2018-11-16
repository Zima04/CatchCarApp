import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CabinetDriverRoutingModule} from './cabinet-driver-routing.module';
import {CabinetDriverComponent} from './cabinet-driver.component';
import {DriverBoardComponent} from './driver-board/driver-board.component';
import {MapService} from '../../services/map-service.service';

@NgModule({
  declarations: [
    CabinetDriverComponent,
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
