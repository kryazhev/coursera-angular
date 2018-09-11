import { Component, OnInit } from '@angular/core';
import { Dish, Promotion, Leader } from '../../model/data';

import { DishService, DISHES } from '../../services/dish.service';
import { PromotionService } from '../../services/promotion.service';
import { LeaderService } from '../../services/leader.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishService: DishService, private promotionService: PromotionService, private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .then(result => this.dish = result);

    this.promotionService.getFeaturedPromotion()
      .then(result => this.promotion = result);

    this.leaderService.getFeaturedLeader()
      .then(result => this.leader = result);
  }

}
