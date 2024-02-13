import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingComponent } from 'src/app/pages/landingPage/landing/landing.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule, SharedModule, PdfViewerModule
  ]
})
export class LandingModule { }
