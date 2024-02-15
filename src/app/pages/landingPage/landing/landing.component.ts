import { Component } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',

})
export class LandingComponent {
  cvSource: string = "../../../../assets/layout/landing/cv pdf.pdf";
  title: string = 'cvPdf';

  skills: any[] = ["Bootstrap", "Figma", "Ionic", "Electron", "NestJs"];


}
