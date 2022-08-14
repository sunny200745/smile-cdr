import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get('baseR4/Patient');
  }

  fetchPatient(givenName?: string, familyName?: string) {
    return this.http.get(`baseR4/Patient?given=${givenName}&family=${familyName}`)
  }
}
