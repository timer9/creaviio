import { Component } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent {

}
