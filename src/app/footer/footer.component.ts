import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/fontawesome-free';
@Component({
  selector: 'app-footer',
  template: `
    <nav>
      <footer class="bg-light text-center text-white">
        <!-- Grid container -->
        <div class="container p-4 pb-0">
          <!-- Section: Social media -->
          <section class="mb-4">
            <!-- Facebook -->
            <a
              class="btn text-red btn-floating m-1"
              style="background-color: #F8F9FA;"
              href="https://www.facebook.com/"
              role="button"
            ><i class="fab fa-facebook-f"></i
            ></a>

            <!-- youtube -->
            <a
              class="btn text-red btn-floating m-1"
              style="background-color: #F8F9FA;"
              href="https://www.youtube.com/channel/UCliOIaqA0_ekqLJvOKMjngw"
              role="button"
            ><i class="fab fa-youtube"></i
            ></a>

            <!-- Google -->
            <a
              class="btn text-red btn-floating m-1"
              style="background-color: #F8F9FA;"
              href="https://www.google.com/"
              role="button"
            ><i class="fab fa-google"></i
            ></a>

            <!-- Instagram -->
            <a
              class="btn text-red btn-floating m-1"
              style="background-color: #F8F9FA;"
              href="https://www.instagram.com/amir.teshnehdel/?hl=bg"
              role="button"
            ><i class="fab fa-instagram"></i
            ></a>

            <!-- Linkedin -->
            <a
              class="btn text-red btn-floating m-1"
              style="background-color: #F8F9FA;"
              href="https://www.linkedin.com/in/amir-hossein-teshnehdel-28245527b/"
              role="button"
            ><i class="fab fa-linkedin-in"></i
            ></a>
            <!-- Github -->
            <a
              class="btn text-red btn-floating m-1"
              style="background-color: #F8F9FA;"
              href="https://www.github.com/"
              role="button"
            ><i class="fab fa-github"></i
            ></a>
          </section>
          <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(248, 249, 250, 0.2);">
          <div class="copyright-text" style="font-size: 12px">
             Copyright © 2023 All rights reserved | This template is made with (Love) by Amir Hossein Teshehdel
          </div>
          <a class="text-white" href="https://www.instagram.com/amir.teshnehdel/?hl=bg"></a>
        </div>
        <!-- Copyright -->
      </footer>
    </nav>

  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
// Import the specific icons you are using in the template
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faGoogle = faGoogle;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;

}
