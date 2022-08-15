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
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { QuestionaireInputComponent } from './questionaire-input/questionaire-input.component';
import { JsonFormComponent } from './json-form/json-form.component';
import { PatientDetailsJsonComponent } from './patient-details-json/patient-details-json.component';
import { FormResultComponent } from './form-result/form-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    HomeComponent,
    FooterComponent,
    CommonPipe,
    SearchPatientComponent,
    PatientListComponent,
    PatientDetailsComponent,
    QuestionaireComponent,
    QuestionaireInputComponent,
    JsonFormComponent,
    PatientDetailsJsonComponent,
    FormResultComponent
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
