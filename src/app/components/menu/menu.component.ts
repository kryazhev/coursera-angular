import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../../model/data';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[];

  errors: string;

  constructor(@Inject('BaseURL') private BaseURL, private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(result => this.dishes = result, errors => this.errors = <any>errors);
  }

}
