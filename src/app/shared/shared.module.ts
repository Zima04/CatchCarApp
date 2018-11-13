import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from '../components/map/map.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';
import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {AgmCoreModule} from '@agm/core';
import {RatingModule} from 'primeng/rating';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    MapComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxMaterialTimepickerModule.forRoot(),
    AgmCoreModule,
    RatingModule,
    FormsModule,
    PerfectScrollbarModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    AgmCoreModule,
    MatMenuModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    NgxMaskModule,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    NgxMaterialTimepickerModule,
    RatingModule,
    FormsModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]

})
export class SharedModule {
}
