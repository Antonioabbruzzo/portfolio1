import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    GameRoutingModule, SharedModule
  ]
})
export class GameModule { }
