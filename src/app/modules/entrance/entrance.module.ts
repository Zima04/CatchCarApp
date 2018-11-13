import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntrancePartComponent} from './entrance-part/entrance-part.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrtionPageComponent} from './registration-page/registrtion-page.component';
import {EntranceRoutingModule} from './entrance-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {EntrancePageComponent} from './entrance-page.component';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [
    EntrancePartComponent,
    LoginPageComponent,
    RegistrtionPageComponent,
    EntrancePageComponent,
  ],
  imports: [
    CommonModule,
    EntranceRoutingModule,
    SharedModule,
  ],
  exports: []
})
export class EntranceModule {
}
