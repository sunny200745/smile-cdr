import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { FormField } from '../shared/form-field';
import { FormControlService } from '../shared/form-control.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})

export class PatientDetailsComponent implements OnInit {
  formFields$: Observable<FormField<any>[]> | undefined;
  formData: any;
  constructor( private service: ApiService, formService: FormControlService) {
    
    this.formFields$ = formService.getFormFields();
  }

  ngOnInit(): void {
    this.service.getQuestions().subscribe((values:any)=>{
      this.formData = values;
    })

  }


}

