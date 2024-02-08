import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
