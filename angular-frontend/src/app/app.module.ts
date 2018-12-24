import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { UserService} from './services/user.service';
import { RecommendedService } from './services/recommended.service';
import { EpisodeService } from './services/episode.service';
import { AuthService } from './services/auth.service';
import { ShowService } from './services/show.service';
import { AuthGuardService } from './services/auth-guard.service';
import { Data } from './services/data.service';

// Componentes
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { ShowComponent } from './components/show/show.component';
import { ShowCardComponent } from './components/show/show-card/show-card.component';
import { EpisodesComponent } from './components/episode/episodes.component';
import { ShowSearchComponent } from './components/show/show-search/show-search.component';
import { MyShowsComponent } from './components/my-shows/my-shows.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    RecommendedComponent,
    ShowComponent,
    ShowCardComponent,
    EpisodesComponent,
    ShowSearchComponent,
    MyShowsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    RecommendedService,
    ShowService,
    EpisodeService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    Data,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
