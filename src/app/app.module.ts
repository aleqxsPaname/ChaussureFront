import { auteursRouting } from './auteurs/auteurs.routing';
import { AuteursModule } from './auteurs/auteurs.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import { FileSelectDirective } from 'ng2-file-upload';

import { routing } from './app.routing';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent, 
   // FileSelectDirective,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuteursModule,
    auteursRouting,
    routing, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

