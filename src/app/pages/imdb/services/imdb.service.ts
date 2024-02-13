import { Injectable } from '@angular/core';
import { Titles } from '../model/titoli.model';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private id: any[] = [];
  private film: Titles[] = [];

  getFilm() {
    return this.film;
  }

  addFilm(titolo: any) {
    this.film.push(titolo);

    return this.film;
  }

  getSingleFilm() { //DECIDO DI TORNARE SOLO L'INDICE ZERO IN QUANTO AVRò SEMPRE UN SOLO ELEMENTO PER RICERCA
    return this.film[0].title;
  }

  empyArray() {
    return this.film = [];
  }

  takeId(idFilm: string) {
    this.id.push(idFilm);


    return this.id[0];
  }

  resetId() {
    return this.id = [];
  }

}
