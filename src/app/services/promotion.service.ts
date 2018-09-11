import { Injectable } from '@angular/core';
import { Promotion } from '../model/data';

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(1000));
  }

  getPromotion(id: number): Observable<Promotion> {
    return of(PROMOTIONS.filter((item) => (item.id === id))[0]).pipe(delay(1000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter((item) => item.featured)[0]).pipe(delay(1000));
  }
}

const PROMOTIONS: Promotion[] = [
  {
    id: 0,
    name: 'Weekend Grand Buffet',
    image: '/assets/images/buffet.png',
    label: 'New',
    price: '19.99',
    featured: true,
    // tslint:disable-next-line:max-line-length
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  }
];
