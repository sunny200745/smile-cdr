import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

interface ResultList {
  entry?: Array<any>
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  patientsList: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getPatients() {
    this.apiService.getPatients().subscribe((results: ResultList) => {
      this.patientsList = results.entry;
    })
  }
}
