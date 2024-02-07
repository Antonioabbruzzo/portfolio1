import { WizardDetailComponent } from './wizard-detail/wizard-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HarryPotterRoutingModule } from './harry-potter-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingComponent } from 'src/app/demo/components/landing/landing.component';
import { WizardsComponent } from './wizards/wizards.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [LandingPageComponent, WizardDetailComponent, WizardsComponent],
  imports: [
    CommonModule,
    HarryPotterRoutingModule, SharedModule
  ]
})
export class HarryPotterModule { }
