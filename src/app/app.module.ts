import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { FooterComponent } from './footer/footer.component';
import { CommonPipe } from './shared/common.pipe';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    HomeComponent,
    FooterComponent,
    CommonPipe,
    SearchPatientComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
