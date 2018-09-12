import { Injectable, Inject } from '@angular/core';
import { Leader } from '../model/data';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(@Inject('BaseURL') private BaseURL, private httpClient: HttpClient) { }

  getLeaders(): Observable<Leader[]> {
    return this.httpClient.get<Leader[]>(this.BaseURL + 'leaders');
  }

  getLeader(id: number): Observable<Leader> {
    return this.httpClient.get<Leader>(this.BaseURL + 'leaders/' + id);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.httpClient.get<Leader>(this.BaseURL + 'leaders?featured=true').pipe(map(leaders => leaders[0]));
  }

}
