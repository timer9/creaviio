import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `


      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" [routerLink]="'/'">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" [routerLink]="'/webs'">Website <span class="sr-only"></span></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" [routerLink]="'/contact'">Contact <span class="sr-only"></span></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" [routerLink]="'/about'">About <span class="sr-only"></span></a>
            </li>
          </ul>
        </div>
      </nav>

  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
