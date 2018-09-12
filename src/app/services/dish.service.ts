import { Injectable } from '@angular/core';
import { Dish } from '../model/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private restangular: Restangular) { }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({ featured: true }).pipe(map(items => items[0]));
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes().pipe(map(dishes => dishes.map(d => d.id)));
  }
}

