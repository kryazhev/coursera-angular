import { Injectable, Inject } from '@angular/core';
import { Promotion } from '../model/data';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { handleError } from './utils';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(@Inject('BaseURL') private BaseURL, private httpClient: HttpClient) { }

  getPromotions(): Observable<Promotion[]> {
    return this.httpClient.get<Promotion[]>(this.BaseURL + 'promotions')
      .pipe(catchError(handleError));
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.httpClient.get<Promotion>(this.BaseURL + 'promotions/' + id)
      .pipe(catchError(handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.httpClient.get<Promotion>(this.BaseURL + 'promotions?featured=true')
      .pipe(map(promotions => promotions[0]))
      .pipe(catchError(handleError));
  }
}
