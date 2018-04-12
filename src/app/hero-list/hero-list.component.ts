import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  showCreateForm: boolean;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    console.log(hero);
  }

  addHero(hero: Hero){
    const count = this.heroes.length;
    const newId = this.heroes[count - 1].id + 1;

    // Add
    this.heroes.push(<Hero>{
      id: newId,
      name: hero.name,
      rate: hero.rate,
    });

    console.log(this.heroes);
  }
}
