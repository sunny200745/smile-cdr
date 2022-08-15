import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.scss']
})
export class FormResultComponent implements OnInit {
  @Input() formData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
