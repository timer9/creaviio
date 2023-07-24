import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WebsiteComponent } from './website/website.component';
import { SlidePage1Component } from './slide-page1/slide-page1.component';
import {NgOptimizedImage} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    WebsiteComponent,
    SlidePage1Component,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
