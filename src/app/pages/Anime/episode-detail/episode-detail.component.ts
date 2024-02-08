import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleEpisode } from '../models/singleEpisode.model';
import { AnimeService } from '../services/anime.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LogarithmicScale } from 'chart.js';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {
  episodeId: string = '';
  episode: SingleEpisode = new SingleEpisode();
  animeId: string = '';
  show: boolean = false;

  constructor(private animeService: AnimeService, public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,) {
    console.log(this.episodeId);

  }
  ngOnInit(): void {
    if (this.config.data.idEpisode) {
      this.episodeId = this.config.data.idEpisode;
      this.animeId = this.config.data.idAnime;
      this.getData();
    }
  }

  getData() {
    this.animeService.getEpisodesDetail(this.animeId, this.episodeId).subscribe((res: SingleEpisode) => {
      this.episode = res;
      this.show = !this.show;
    });
  }


}
