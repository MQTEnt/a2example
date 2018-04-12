import { Routes, RouterModule } from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: HeroListComponent
  },
  {
    path: 'hero/:id',
    component: HeroDetailComponent
  },
  /*Set default route*/
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
