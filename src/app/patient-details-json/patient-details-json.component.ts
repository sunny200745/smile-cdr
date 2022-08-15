import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormField } from '../shared/form-field';
import { FormControlService } from '../shared/form-control.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-details-json',
  templateUrl: './patient-details-json.component.html',
  styleUrls: ['./patient-details-json.component.scss']
})
export class PatientDetailsJsonComponent implements OnInit {
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
