import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../shared/form-field';
import { FormControlService } from '../shared/form-control.service';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss']
})
export class QuestionaireComponent implements OnInit {

  @Input() formFields: FormField<string>[] | null = [];
  form!: FormGroup;
  formData: any;
  constructor(private formfieldService: FormControlService) { }

  ngOnInit(): void {
    this.form = this.formfieldService.formFields(this.formFields as FormField<string>[]);

  }

  submitForm() {
    this.formData = this.form.getRawValue();
  }
}
