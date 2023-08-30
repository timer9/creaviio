import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import {NgOptimizedImage} from "@angular/common";
import { UnderHeaderPicComponent } from './under-header-pic/under-header-pic.component';
import { TextXComponent } from './text-x/text-x.component';
import { TowPicComponent } from './tow-pic/tow-pic.component';
import { TextXxComponent } from './text-xx/text-xx.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { NoHeaderLayoutComponent } from './no-header-layout/no-header-layout.component';
import { WebsComponent } from './webs/webs.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    UnderHeaderPicComponent,
    TextXComponent,
    TowPicComponent,
    TextXxComponent,
    HeaderLayoutComponent,
    NoHeaderLayoutComponent,
    WebsComponent,
    AboutComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
