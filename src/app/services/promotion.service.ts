import { Injectable, Inject } from '@angular/core';
import { Promotion } from '../model/data';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(@Inject('BaseURL') private BaseURL, private httpClient: HttpClient) { }

  getPromotions(): Observable<Promotion[]> {
    return this.httpClient.get<Promotion[]>(this.BaseURL + 'promotions');
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.httpClient.get<Promotion>(this.BaseURL + 'promotions/' + id);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.httpClient.get<Promotion>(this.BaseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]));
  }
}
