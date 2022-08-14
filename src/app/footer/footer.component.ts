import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService, PatientObj } from '../services/loading.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  patientCallObj: Observable<PatientObj>|undefined;
  constructor(private service: LoadingService) { }

  ngOnInit(): void {
    this.patientCallObj = this.service.patientObj$;
    
  }

}
