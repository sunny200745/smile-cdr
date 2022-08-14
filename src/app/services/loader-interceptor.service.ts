import { Injectable } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { BehaviorSubject, catchError, finalize, Observable, throwError } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private loadingService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = performance.now();
    const ptUrl = "baseR4/Patient";
    this.loadingService.showLoader();

    return next.handle(req)
    .pipe(
      finalize(() => {
        this.loadingService.hideLoader();
        if (req.url === ptUrl) {
          this.loadingService.requestTimerLog(startTime, req.url, req.method)
        }
      })
    )
  }


}
