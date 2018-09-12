import { Component, OnInit, Inject } from '@angular/core';
import { Dish, Promotion, Leader } from '../../model/data';

import { DishService } from '../../services/dish.service';
import { PromotionService } from '../../services/promotion.service';
import { LeaderService } from '../../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  errors = new Map<string, string>();

  constructor(@Inject('BaseURL') private BaseURL,
    private dishService: DishService, private promotionService: PromotionService, private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe(
      result => this.dish = result,
      error => this.errors['dishes'] = <any>error.message);

    this.promotionService.getFeaturedPromotion().subscribe(
      result => this.promotion = result,
      error => this.errors['promotions'] = <any>error.message);

    this.leaderService.getFeaturedLeader().subscribe(
      result => this.leader = result,
      error => this.errors['leaders'] = <any>error.message);
  }

}
