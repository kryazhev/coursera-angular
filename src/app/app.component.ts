import { Component, OnInit } from '@angular/core';
import { GreetingService } from './services/greeting.service';
import { DishService } from './services/dish.service';
import { Dish } from './model/dish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private greetingService: GreetingService, private dishService: DishService) {}

  title: string;
  dishes: Dish[];

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
    this.title = this.greetingService.sayHello();
  }

}
