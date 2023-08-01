import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container">
      <h1>Contact Me</h1>
      <div class="contact-info">
        <p>Name: Amir Hossein Teshnehdel</p>
        <p>Phone: +98 938 2088 788</p>
        <p>Email: mr.teshnehdel@gmail.com</p>

      </div>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

}
