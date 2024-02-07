import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,

},
{
  path: 'detail/:id',
  component: DetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImdbRoutingModule { }
