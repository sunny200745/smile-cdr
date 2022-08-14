import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../services/api.service';

interface ResultList {
  entry?: Array<any>
}

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.scss']
})
export class SearchPatientComponent implements OnInit {

  patientsList: any = [];
  patientDataAvailable: boolean | undefined;
  noPatientDataMsg: string = 'No Patient Data Available';
  constructor(private fb: FormBuilder, private service: ApiService) {

  }
  patientForm = new FormGroup({
    givenName: new FormControl('', [ValidateName]),
    familyName: new FormControl('', [ValidateName])
  })

  formData = {
    givenName: '',
    familyName: ''
  }

  get givenName() {
    return this.patientForm.get('givenName');
  }

  get familyName() {
    return this.patientForm.get('familyName');
  }

  ngOnInit(): void {
  }



  searchForPatient(value: any) {
    this.service.fetchPatient(value.givenName, value.familyName).subscribe((results: ResultList) => {
      if (results?.entry) {
        this.patientsList = results?.entry;
      } else {
        this.patientDataAvailable = true;
        this.patientsList = { ...results, entry: [] }
      }
      this.patientForm.reset(this.formData)
    })
  }

}

function ValidateName(control: AbstractControl): ValidationErrors | null {

  if (control.value && !control.value.match(/^[a-zA-Z]+$/)) {
    return { validName: true };
  }
  return null;
}
