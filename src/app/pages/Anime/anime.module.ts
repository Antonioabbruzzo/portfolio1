import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AnimeDetailComponent, EpisodeDetailComponent, HomeComponent],
  imports: [
    CommonModule,
    AnimeRoutingModule, SharedModule
  ]
})
export class AnimeModule { }
