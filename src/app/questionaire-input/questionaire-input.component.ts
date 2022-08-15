import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../shared/form-field';

@Component({
  selector: 'app-questionaire-input',
  templateUrl: './questionaire-input.component.html',
  styleUrls: ['./questionaire-input.component.scss']
})
export class QuestionaireInputComponent implements OnInit {

  @Input() input!: FormField<string> ;
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  get isValid(){
    return this.form.controls[this.input.key].valid;
  }
}
