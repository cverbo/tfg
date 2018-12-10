import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { UserService} from './services/user.service';
import { RecommendedService } from './services/recommended.service';


// Componentes
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { RecommendedCardComponent } from './components/recommended/recommended-card/recommended-card.component';
import { ShowComponent } from './components/show/show.component';
import { ShowService } from './services/show.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    RecommendedComponent,
    RecommendedCardComponent,
    ShowComponent
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
    ShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
