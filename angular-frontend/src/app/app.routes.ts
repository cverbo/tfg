import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { ShowComponent } from './components/show/show.component';
import { EpisodesComponent } from './components/episode/episodes.component';
import { ShowSearchComponent } from './components/show/show-search/show-search.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MyShowsComponent } from './components/my-shows/my-shows.component';
import { PersonalCalendarComponent } from './components/calendars/personal-calendar/personal-calendar.component';
import { UserComponent } from './components/user/user.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'my-shows', component: MyShowsComponent, canActivate: [AuthGuardService] },
    { path: 'about', component: AboutComponent },
    { path: 'recommended', component: RecommendedComponent, canActivate: [AuthGuardService] },
    { path: 'show/:id', component: ShowComponent, canActivate: [AuthGuardService] },
    { path: 'episodes/:id', component: EpisodesComponent, canActivate: [AuthGuardService] },
    { path: 'show-search/:text', component: ShowSearchComponent, canActivate: [AuthGuardService] },
    { path: 'personal-calendar', component: PersonalCalendarComponent, canActivate: [AuthGuardService] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuardService] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
