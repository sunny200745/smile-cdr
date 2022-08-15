import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validator, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { FormField } from './form-field';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {
  questions: any = [];

  constructor(private service: ApiService) {

  }

  formFields(inputs: FormField<string>[]) {
    const group: any = {};
    inputs.forEach((input: any) => {
      group[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
        : new FormControl(input.value || '');
    });

    return new FormGroup(group)
  }

  getFormFields() {
    this.service.getQuestions().subscribe((values: any) => {
      let questions = values.item;
      questions = questions.map((q: any) => {
        return new FormField<string>({
          controlType: q.controlType,
          key: q.name,
          label: q.text,
          required: true,
          order: q.linkId,
          // options:
        })
      })

    })


    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: "radio",
        key: 'allergies',
        label: 'Do you have allergies?',
        type: 'radio',
        order: 1,
        options: [
          { key: 'true', value: 'True' },
          { key: 'false', value: 'False' }
        ],
      }),

      new FormField<string>({
        controlType: "dropdown",
        key: 'gender',
        label: 'What is your gender?',
        order: 2,
        options: [
          { key: 'male', value: 'Male' },
          { key: 'female', value: 'Female' },
          { key: 'other', value: 'Other' }
        ],
      }),

      new FormField<string>({
        controlType: "date",
        key: 'dateOfBirth',
        label: 'What is your date of birth?',
        order: 3
      }),

      new FormField<string>({
        controlType: "textbox",
        key: 'countryOfBirth',
        label: 'What is your country of birth?',
        required: true,
        order: 4
      }),


      new FormField<string>({
        controlType: "dropdown",
        key: 'maritalStatus',
        label: 'What is your marital status?',
        order: 5,
        options: [
          { key: 'married', value: 'Married' },
          { key: 'single', value: 'Single' },
          { key: 'divorced', value: 'Divorced' }
        ],
      }),
      

      new FormField<string>({
        controlType: "radio",
        key: 'smoke',
        label: 'Do you smoke?',
        type: 'radio',
        order: 6,
        options: [
          { key: 'true', value: 'True' },
          { key: 'false', value: 'False' }
        ],
      }),


      new FormField<string>({
        controlType: "radio",
        key: 'alchohol',
        label: 'Do you drink alchohol?',
        type: 'radio',
        order: 7,
        options: [
          { key: 'true', value: 'True' },
          { key: 'false', value: 'False' }
        ],
      }),



    ];


    return of(inputs.sort((a, b) => a.order - b.order));

  }
}
