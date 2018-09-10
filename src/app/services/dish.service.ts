import { Injectable } from '@angular/core';
import { Dish, DISHES } from '../model/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }
}
