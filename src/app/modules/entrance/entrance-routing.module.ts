import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrtionPageComponent} from './registration-page/registrtion-page.component';
import {EntrancePartComponent} from './entrance-part/entrance-part.component';
import {EntrancePageComponent} from './entrance-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'steps'},
  {
    path: 'steps', component: EntrancePageComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'entrance'},
      {path: 'entrance', pathMatch: 'full', component: EntrancePartComponent},
      {path: 'login', pathMatch: 'full', component: LoginPageComponent},
      {path: 'registration', pathMatch: 'full', component: RegistrtionPageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntranceRoutingModule {
}
