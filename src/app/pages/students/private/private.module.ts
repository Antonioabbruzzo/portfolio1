import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { CreateDataComponent } from './create-data/create-data.component';
import { EditDataTitleComponent } from './edit-data-title/edit-data-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [CreateDataComponent,
    EditDataTitleComponent, ListComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule, ReactiveFormsModule, RouterModule, FormsModule
  ]
})
export class PrivateModule { }
