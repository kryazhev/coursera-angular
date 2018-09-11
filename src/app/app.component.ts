import { Component, OnInit } from '@angular/core';
import { GreetingService } from './services/greeting.service';
import { DishService } from './services/dish.service';
import { Dish } from './model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private greetingService: GreetingService) {}

  title: string;
  dishes: Dish[];

  ngOnInit(): void {
    this.title = this.greetingService.sayHello();
  }

}
