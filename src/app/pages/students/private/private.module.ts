import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { CreateDataComponent } from './create-data/create-data.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CreateDataComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule, ReactiveFormsModule, RouterModule, FormsModule, SharedModule
  ]
})
export class PrivateModule { }
