import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../../model/data';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;

  constructor(private location: Location, private route: ActivatedRoute, private dishService: DishService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dishService.getDish(id)
      .subscribe(result => this.dish = result);
  }

  goBack(): void {
    this.location.back();
  }

}
