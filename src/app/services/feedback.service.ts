import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Feedback } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  addFeedback(feedback: Feedback) {
    this.restangular.all('feedbacks').post(feedback);
  }

}
