import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingComponent } from 'src/app/pages/landingPage/landing/landing.component';




@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule, SharedModule,
  ]
})
export class LandingModule { }
