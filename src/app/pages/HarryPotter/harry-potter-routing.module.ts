import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WizardsComponent } from './wizards/wizards.component';
import { WizardDetailComponent } from './wizard-detail/wizard-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent
},
{
  path: 'wizards',
  component: WizardsComponent
},
{
  path: 'detail/:id',
  component: WizardDetailComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarryPotterRoutingModule { }
