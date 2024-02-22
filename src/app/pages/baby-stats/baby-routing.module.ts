import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { PappeComponent } from './pappe/pappe.component';
import { NannaComponent } from './nanna/nanna.component';
import { PipiComponent } from './pipi/pipi.component';
import { PupuComponent } from './pupu/pupu.component';
import { SettingsComponent } from './settings/settings.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'pappe',
    component: PappeComponent
  },
  {
    path: 'nanne',
    component: NannaComponent
  },
  {
    path: 'pipi',
    component: PipiComponent
  },
  {
    path: 'nanna',
    component: NannaComponent
  },
  {
    path: 'pupu',
    component: PupuComponent
  },
  {
    path: 'setting',
    component: SettingsComponent
  },
  {
    path: 'registrazione',
    component: RegistrazioneComponent
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BabyRoutingModule { }
