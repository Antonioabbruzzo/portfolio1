import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',

})
export class LandingComponent {
  products: any[] = [1, 2, 3, 4, 5, 6, 7, 7];
}
