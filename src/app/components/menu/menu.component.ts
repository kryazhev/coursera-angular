import { Component, OnInit, Inject } from '@angular/core';
import { Dish, DISHES } from '../../model/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor() { }

  ngOnInit() {
    this.dishes = DISHES;
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
