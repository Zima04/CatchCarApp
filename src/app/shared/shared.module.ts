import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from '../components/map/map.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatSidenavModule, MatSortModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
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
import {ImageUploaderModule} from 'ngx-image-uploader';
import {AgmDirectionModule} from 'agm-direction';
import {AlertModule} from 'ngx-bootstrap';
import {TranslateModule} from '@ngx-translate/core';

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
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
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
    MatTooltipModule,
    ImageUploaderModule,
    AgmDirectionModule,
    AlertModule.forRoot(),
    TranslateModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    AgmCoreModule,
    MatMenuModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
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
    PerfectScrollbarModule,
    MatTooltipModule,
    ImageUploaderModule,
    AgmDirectionModule,
    AlertModule,
    TranslateModule
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
