import {
  Component,
  OnChanges,
  Input,
  ChangeDetectionStrategy,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface JsonFormValidators {
  required?: boolean;
}
interface JsonFormControlOptions {
  valueCoding: {
    code: string,
    display: string
  }

}
interface JsonFormControls {
  name: string;
  text: string;
  value: string;
  controlType: string,
  key: string,
  option?: JsonFormControlOptions[];
  required: boolean;
  validators: JsonFormValidators;
}

export interface JsonFormData {
  item: JsonFormControls[];
}

@Component({
  selector: 'app-json-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnChanges {
  @Input() jsonFormData!: JsonFormData;
  public jsonForm: FormGroup = this.fb.group({});
  formData: any;
  payLoad = '';

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['jsonFormData'].firstChange) {
      this.createForm(this.jsonFormData.item)
    }
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      this.jsonForm.addControl(
        control.name,
        this.fb.control(control.value, Validators.required)
      )
    }
  }

  onSubmit() {
    this.formData = this.jsonForm.value;
  }
}
