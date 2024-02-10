import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibreriaRoutingModule } from './libreria-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibraryComponent } from './library/library.component';
import { TrancatePipe } from '../pipes/trancate.pipe';


@NgModule({
  declarations: [HomeComponent, LibraryComponent, TrancatePipe],
  imports: [
    CommonModule,
    LibreriaRoutingModule, SharedModule,
  ]
})
export class LibreriaModule { }
