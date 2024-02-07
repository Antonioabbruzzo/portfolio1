import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router: Router) { }

  show: boolean = false;

  goTo() {
    setTimeout(() => {
      this.router.navigate(['harrypotter/wizards']);
    }, 1500);
    this.show = !this.show;
  }
}
