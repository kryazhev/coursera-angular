import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../../services/leader.service';
import { Leader } from '../../model/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaderService.getLeaders()
      .then(result => this.leaders = result);
  }

}
