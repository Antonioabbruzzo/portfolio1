import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImdbRoutingModule } from './imdb-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [HomePageComponent, DetailComponent],
  imports: [
    CommonModule,
    ImdbRoutingModule, FormsModule, SharedModule, RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImdbModule { }
