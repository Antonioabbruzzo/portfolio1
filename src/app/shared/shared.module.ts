import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TranslateModule } from '@ngx-translate/core';
import { Divider, DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChartModule } from 'primeng/chart';


const MODULES = [TranslateModule];
const SERVICES = [ConfirmationService, MessageService, DialogService];
const primeNgModule = [FormsModule,
  DataViewModule,
  PickListModule,
  OrderListModule,
  InputTextModule,
  DropdownModule,
  RatingModule,
  RippleModule,
  ButtonModule,
  ReactiveFormsModule,
  ToastModule, AutoCompleteModule, CalendarModule, PasswordModule, ImageModule,
  GalleriaModule,
  CarouselModule, CardModule, ProgressSpinnerModule, TableModule, DialogModule, ProgressBarModule, SplitButtonModule,
  ToggleButtonModule, AnimateOnScrollModule, DividerModule, CheckboxModule, RadioButtonModule, ChartModule];

@NgModule({
  imports: [
    CommonModule, ...primeNgModule, ...MODULES


  ],
  providers: [...SERVICES],
  declarations: [],
  exports: [...primeNgModule, ...MODULES]

})
export class SharedModule { }
