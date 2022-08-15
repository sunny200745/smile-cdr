import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientDetailsJsonComponent } from './patient-details-json/patient-details-json.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPatientComponent },
  { path: 'details-static', component: PatientDetailsComponent },
  { path: 'details-json', component: PatientDetailsJsonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
