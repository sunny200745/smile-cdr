import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: Observable<boolean> | undefined;
  constructor(public loadingService: LoadingService) { }
    

  ngOnInit(): void {
    this.isLoading = this.loadingService.loading$;
  }
  

}
