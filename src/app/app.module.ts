import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroService} from './hero.service';


import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { appRouterModule } from './app.routes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroCreateComponent,
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
