import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome-page'},
  {path: 'welcome-page', loadChildren: 'src/app/modules/entrance/entrance.module#EntranceModule'},
  // {path: 'cabinet-driver', loadChildren: 'src/app/modules/entrance/cabinet-driver.module#EntranceModule'},
  {path: 'cabinet-passenger', loadChildren: 'src/app/modules/cabinet-passenger/cabinet-passenger.module#CabinetPassengerModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
