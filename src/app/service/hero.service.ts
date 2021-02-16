import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    {
      id: 1,
      name: 'Tom',
      superPower: 'chasing mice',
      address: 'USA',
    },
    {
      id: 2,
      name: 'Jerry',
      superPower: 'outmaneuver cats',
      address: 'USA',
    },
    {
      id: 3,
      name: 'Road Runner',
      superPower: 'super fast',
      address: 'California, USA',
    },
    {
      id: 4,
      name: 'Coyote',
      superPower: 'persistent',
      address: 'California, USA',
    },
    {
      id: 5,
      name: 'Snow White',
      superPower: 'beautiful',
      address: 'Wonderland',
    }
  ]

  constructor() { }

  getAll(): Hero[] {
    return this.heroes;
  }
}
