import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {WebsiteComponent} from "./website/website.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'About',component:AboutComponent},
  {path:'Website',component:WebsiteComponent},
  {path:'Not-Found',component:NotfoundComponent},
  {path:'**',redirectTo:'Not-Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
