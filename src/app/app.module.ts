import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCRDgLLTpapsu3Xn6sQXcWz_Bh4Da9bNeY'}), // <---
    NgbModule
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
