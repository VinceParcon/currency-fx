import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) {
  }

  get<T>(endpoint: string, param?: any): Observable<T> {
    return this.http.get(`${endpoint}`, param).pipe(
      catchError((error) => {
        return throwError(error);
      })
    ) as unknown as Observable<T>;
  }
}
