import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BabyRoutingModule } from './baby-routing.module';
import { HomeComponent } from './home/home.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';
import { PipiComponent } from './pipi/pipi.component';
import { PappeComponent } from './pappe/pappe.component';
import { PupuComponent } from './pupu/pupu.component';
import { NannaComponent } from './nanna/nanna.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [HomeComponent, RegistrazioneComponent, LoginComponent, StatsComponent, PipiComponent, PappeComponent, PupuComponent, NannaComponent, SettingsComponent],
  imports: [
    CommonModule,
    BabyRoutingModule, SharedModule
  ]
})
export class BabyModule { }
