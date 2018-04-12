import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService} from '../hero.service';

import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero;
  sub: any;

  constructor(private heroService: HeroService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      const idHero = Number.parseInt(params['id']);
      // console.log(idHero);
      this.hero = this.heroService.getHeroById(idHero);
      console.log(this.hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
