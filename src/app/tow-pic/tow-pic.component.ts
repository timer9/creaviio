import { Component,  } from '@angular/core';

@Component({
  selector: 'app-tow-pic',
  templateUrl: './tow-pic.component.html',
  styleUrls: ['./tow-pic.component.css'],


})
export class TowPicComponent {

  currentLink: string = "https://www.instagram.com/amiro.cj/?hl=bg";

  increaseFontSize() {
    // Update the link URL
    this.currentLink = "https://www.instagram.com/amiro.cj/?hl=bg";
  }
}
