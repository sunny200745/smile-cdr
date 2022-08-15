import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PatientObj {
  method:string,
  url: string,
  loadingTime: number
}
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  patientObj:PatientObj = {
    method:'',
    url: '',
    loadingTime: 0
  }
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  private _patientObj = new BehaviorSubject<PatientObj>(this.patientObj);
  public readonly patientObj$ = this._patientObj.asObservable();
  constructor() { }

  startTime: any | undefined;

  showLoader(): void {
    this._loading.next(true);
  }
  
  hideLoader() {
    this._loading.next(false);
  }

  requestTimerLog(st: number, url: string, method: string) {
    this._patientObj.next({url:url, method:method, loadingTime: performance.now() - st});
    console.log(`HTTP ${method} ${url} - ${performance.now() - st} milliseconds`);
  }
}
