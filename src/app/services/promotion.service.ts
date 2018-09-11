import { Injectable } from '@angular/core';
import { Promotion } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: number): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTIONS.filter((item) => (item.id === id))[0]), 2000);
    });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTIONS.filter((item) => item.featured)[0]), 2000);
    });
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
