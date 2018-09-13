import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish, Comment } from '../../model/data';
import { DishService } from '../../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { onValueChanged } from '../../services/utils';
import { flyInOut, visibility } from '../../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    visibility()
  ]
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishCopy = null;

  dishIds: number[];

  prev: number;
  next: number;

  formErrors = {
    'author': '',
    'rating': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required': 'Author is required.',
      'minlength': 'Author must be at least 2 characters long.',
      'maxlength': 'Author cannot be more than 10 characters long.'
    },
    'rating': {
      'required': 'Rating is required.',
      'min': 'Rating must be at least 1.',
      'max': 'Rating cannot be more than 5.'
    },
    'comment': {
      'required': 'Comment is required.',
      'minlength': 'Comment must be at least 2 characters long.',
      'maxlength': 'Comment cannot be more than 25 characters long.'
    },
  };

  comment: Comment;
  commentForm: FormGroup;

  @ViewChild('fform') commentFormDirective;

  visibility = 'shown';
  errors: string;

  constructor(@Inject('BaseURL') private BaseURL,
    private location: Location, private route: ActivatedRoute, private dishService: DishService, private builder: FormBuilder) { }

  ngOnInit() {
    this.dishService.getDishIds().subscribe(result => this.dishIds = result);

    this.route.params
      .pipe(switchMap(params => {
        this.visibility = 'hidden';
        return this.dishService.getDish(+params['id']);
      }))
      .subscribe(result => {
        this.dish = result;
        this.dishCopy = result;
        this.setPrevNext(result.id);
        this.visibility = 'shown';
      });

    this.commentForm = this.builder.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      comment: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: ['5', [Validators.required, Validators.min(1), Validators.max(5)]],
    });

    this.commentForm.valueChanges
      .subscribe(
        data => { onValueChanged(this.commentForm, this.formErrors, this.validationMessages, data); },
        error => this.errors = <any>error.message);

    onValueChanged(this.commentForm, this.formErrors, this.validationMessages);
  }

  goBack(): void {
    this.location.back();
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();

    this.dishCopy.comments.push(this.comment);
    this.dishCopy.save().subscribe(result => this.dish = result);

    this.commentForm.reset({
      author: '',
      comment: '',
      rating: '5',
    });
    this.commentFormDirective.resetForm();
  }

}
