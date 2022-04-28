import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private apiService: ApiService) { }
  apiKey = 'dfe6ac01fd7349f89738239b46e0f9ed';

  getCurrencyList(): Observable<any> {
    return this.apiService.get('http://localhost:8080/currencyResource/list');
  }

}
