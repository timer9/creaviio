import { Component,OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-text-xx',
  templateUrl: './text-xx.component.html',
  styleUrls: ['./text-xx.component.css']
})
export class TextXxComponent implements OnInit {
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }
  textBoxValue: string = 'S    e    r    v    i    c    e    s  ------------'; // You can change the text here

}
