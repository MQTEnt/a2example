import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {
  @Input() clickAddHandle: any // Prop clickAddHandle
  hero: Hero;
  nameValid: boolean;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.hero = <Hero>{};
    this.nameValid = true;
    // console.log(this.heroes);
  }

  onBlurHandle(name: string) {
    if (typeof name === 'undefined' || name === '') {
      this.nameValid = false;
    } else {
      this.nameValid = true;
    }
  }

  onClickCreateButton() {
    if (!this.hero.name) {
      this.nameValid = false;
    }
    if (this.nameValid) {
      this.heroService.create(this.hero);

      // Add
      this.clickAddHandle(this.hero);
    }
  }

}
