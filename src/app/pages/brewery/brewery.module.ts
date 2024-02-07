import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreweryRoutingModule } from './brewery-routing.module';
import { BreweryComponent } from './brewery/brewery.component';
import { SingleBreweryComponent } from './single-brewery/single-brewery.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BreweryComponent, SingleBreweryComponent],
  imports: [
    CommonModule,
    BreweryRoutingModule, SharedModule
  ]
})
export class BreweryModule { }
