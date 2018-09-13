import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from '../../services/leader.service';
import { Leader } from '../../model/data';
import { flyInOut } from '../../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(@Inject('BaseURL') private BaseURL, private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaderService.getLeaders()
      .subscribe(result => this.leaders = result);
  }

}
