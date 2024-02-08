import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../models/anime.model';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  search: string = '';
  animeList: Anime[] = [];
  home: boolean = false;


  constructor(private animeService: AnimeService, private router: Router) { }

  searchAnime() {
    console.log(this.search);
    this.home = !this.home;
    console.log(this.home);
    this.animeService.getAnime(this.search).subscribe((res) => {
      this.animeList = res;
      console.log(this.animeList);
    });
  }

  animeDetail(id: number) {
    this.router.navigate([`anime/anime-detail/${id}`]);
  }


}
