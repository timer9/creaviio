import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <ng-container *ngIf="showHeader">
    </ng-container>

    <router-outlet></router-outlet>


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader: boolean = true;
  title: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !event.url.includes('/Not-Found') && this.isWildcardRoute(event.url);
      }
    });
  }

  isWildcardRoute(url: string): boolean {
    const routeConfig = this.activatedRoute.routeConfig;
    return routeConfig !== null && routeConfig.path === '**';
  }
}
