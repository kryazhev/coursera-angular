import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../../model/data';
import { DishService } from '../../services/dish.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: number[];

  prev: number;
  next: number;

  constructor(private location: Location, private route: ActivatedRoute, private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishIds().subscribe(result => this.dishIds = result);

    this.route.params
      .pipe(switchMap(params => this.dishService.getDish(+params['id'])))
      .subscribe(result => {
        this.dish = result;
        this.setPrevNext(result.id);
      });
  }

  goBack(): void {
    this.location.back();
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

}
