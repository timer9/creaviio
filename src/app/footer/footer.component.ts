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
              class="btn text-white btn-floating m-1"
              style="background-color: #3b5998;"
              href="#!"
              role="button"
            ><i class="fab fa-facebook-f"></i
            ></a>

            <!-- youtube -->
            <a
              class="btn text-white btn-floating m-1"
              style="background-color: #FF0000;"
              href="#!"
              role="button"
            ><i class="fab fa-youtube"></i
            ></a>

            <!-- Google -->
            <a
              class="btn text-white btn-floating m-1"
              style="background-color: #dd4b39;"
              href="#!"
              role="button"
            ><i class="fab fa-google"></i
            ></a>

            <!-- Instagram -->
            <a
              class="btn text-white btn-floating m-1"
              style="background-color: #ac2bac;"
              href="https://www.instagram.com/amiro.cj/?hl=bg"
              role="button"
            ><i class="fab fa-instagram"></i
            ></a>

            <!-- Linkedin -->
            <a
              class="btn text-white btn-floating m-1"
              style="background-color: #0082ca;"
              href="#!"
              role="button"
            ><i class="fab fa-linkedin-in"></i
            ></a>
            <!-- Github -->
            <a
              class="btn text-white btn-floating m-1"
              style="background-color: #333333;"
              href="#!"
              role="button"
            ><i class="fab fa-github"></i
            ></a>
          </section>
          <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          © 2023 Designed and developed by Amir Hossein Teshehdel
          <a class="text-white" href="https://www.instagram.com/amiro.cj/?hl=bg"></a>
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
