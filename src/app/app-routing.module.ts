import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ContactComponent} from "./contact/contact.component";
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { NoHeaderLayoutComponent } from './no-header-layout/no-header-layout.component';
import {WebsComponent} from "./webs/webs.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: '',
    component: HeaderLayoutComponent, // Use the layout with the header
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component:AboutComponent },
      { path: 'webs', component: WebsComponent}, // Add this line to match the WebsiteComponent
    ],
  },
  {
    path: 'not-found',
    component: NoHeaderLayoutComponent, // Use the layout without the header
    children: [{ path: '', component: NotfoundComponent }],
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
