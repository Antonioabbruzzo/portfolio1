import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'library',
  component: LibraryComponent
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},
{
  path: '**',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibreriaRoutingModule { }
