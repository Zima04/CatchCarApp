import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CabinetDriverRoutingModule} from './cabinet-driver-routing.module';
import {CabinetDriverComponent} from './cabinet-driver.component';

@NgModule({
  declarations: [
    CabinetDriverComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CabinetDriverRoutingModule,
  ]
})
export class CabinetDriverModule { }
