import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `

    <div class="about-container">
      <div class="about-text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          mi a lacus eleifend, in lacinia nulla consectetur. Suspendisse cursus
          consectetur mi, eu vulputate ipsum malesuada ut. In in purus quis erat
          tincidunt convallis nec in odio. Cras dapibus ex sed lorem cursus, nec
          consequat neque dictum. Curabitur tristique est eget elit feugiat, eget
          luctus orci ultrices.
        </p>
      </div>
      <div class="image-box">
        <!-- Replace 'your-image-url' with the URL of your image -->
        <img Src="assets/me1.jpg" alt="About Image" />

      </div>
    </div>

  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
