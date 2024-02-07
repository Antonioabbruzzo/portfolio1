import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryComponent } from './brewery/brewery.component';
import { SingleBreweryComponent } from './single-brewery/single-brewery.component';

const routes: Routes = [{
  path: '',
  component: BreweryComponent
},
{
  path: 'singleBrewey/:id',
  component: SingleBreweryComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreweryRoutingModule { }
