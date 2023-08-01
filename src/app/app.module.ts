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
import { UnderHeaderPicComponent } from './under-header-pic/under-header-pic.component';
import { TextXComponent } from './text-x/text-x.component';
import { TowPicComponent } from './tow-pic/tow-pic.component';
import { TextXxComponent } from './text-xx/text-xx.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { NoHeaderLayoutComponent } from './no-header-layout/no-header-layout.component';



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
    UnderHeaderPicComponent,
    TextXComponent,
    TowPicComponent,
    TextXxComponent,
    HeaderLayoutComponent,
    NoHeaderLayoutComponent,



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
