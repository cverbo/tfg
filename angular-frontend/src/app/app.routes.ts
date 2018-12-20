import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { ShowComponent } from './components/show/show.component';
import { EpisodesComponent } from './components/episode/episodes.component';
import { ShowSearchComponent } from './components/show/show-search/show-search.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'recommended', component: RecommendedComponent},
    { path: 'show/:id', component: ShowComponent},
    { path: 'episodes/:id', component: EpisodesComponent},
    { path: 'show-search/:text', component: ShowSearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
