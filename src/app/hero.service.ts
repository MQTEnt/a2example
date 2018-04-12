import { Injectable } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  {id: 1, name: 'Abc', rate: 10},
  {id: 2, name: 'Bcd', rate: 20},
  {id: 3, name: 'Cde', rate: 30},
  {id: 4, name: 'Def', rate: 40},
  {id: 5, name: 'Efg', rate: 50},
];
@Injectable()
export class HeroService {
  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

  getHeroById(id: number): Hero{
    return HEROES.filter(hero => hero.id === id)[0];
  }

  create(hero: Hero) {
    if (!hero.rate)
      hero.rate = 1;
    console.log('Created')
  }
}
