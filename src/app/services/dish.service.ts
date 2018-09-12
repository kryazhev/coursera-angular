import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../model/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(@Inject('BaseURL') private BaseURL, private httpClient: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(this.BaseURL + 'dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.httpClient.get<Dish>(this.BaseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.httpClient.get(this.BaseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes().pipe(map(dishes => dishes.map(d => d.id)));
  }
}

