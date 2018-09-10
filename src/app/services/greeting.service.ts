import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

  sayHello(): string {
    return 'Hello from service. It is true';
  }
}
