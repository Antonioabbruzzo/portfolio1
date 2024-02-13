import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ImdbService } from '../services/imdb.service';
import { IDescription } from '../model/description.model';
import { Film } from '../model/film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  show: boolean = false;
  id: string = '';
  showCard: boolean = false;
  loading: boolean = false;
  titoli: any;
  filmList: any[] = [];
  responseFromApi: IDescription | undefined;
  films: Film[] = [];
  searchQuery: string = '';
  filteredFilms: Film[] = [];

  filmForm: FormGroup = new FormGroup({
    title: new FormControl('')
  });

  constructor(private apiService: ApiService, private imdb: ImdbService, private router: Router) { }

  ngOnInit(): void {
    this.getFilm('matrix');
  }

  goTo(id: string) {
    this.router.navigate(['imdb/detail', id]);
  }

  getId(idFilm: string) {
    this.imdb.takeId(idFilm);
  }


  reset() {
    this.searchQuery = '';

  }

  getFilm(nome: string) {
    this.apiService.getRicerca(nome).subscribe({
      next: (value: any) => {
        this.responseFromApi = value;

      }
    });

    setTimeout(() => {

      if (this.responseFromApi) {
        this.films = this.responseFromApi.description;
        this.onFilter(); // Chiamata automatica alla funzione di filtro al termine della ricerca API

        this.show = !this.show;
      }
    }, 1000);

  }





  // Nuovo metodo per gestire la ricerca e il filtraggio
  onFilter() {
    if (this.searchQuery) {
      this.filteredFilms = this.films.filter(film =>
        film['#TITLE'].toLowerCase().includes(this.searchQuery.toLowerCase()),

      );


    } else {
      this.filteredFilms = [...this.films];
    }
  }
  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
