import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpService} from './services/http.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(
      {apiKey: 'AIzaSyCRDgLLTpapsu3Xn6sQXcWz_Bh4Da9bNeY', libraries: ['places', 'geometry']}
    ), // <---
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [GoogleMapsAPIWrapper, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
