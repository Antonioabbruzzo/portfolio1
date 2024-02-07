import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ricercaUrl = ' https://search.imdbot.workers.dev/?q=';
  dettagliUrl = 'https://search.imdbot.workers.dev/?tt=';

  constructor(private http: HttpClient) { }


  getRicerca(nomeFilm: string) {
    return this.http.get(`${this.ricercaUrl}${nomeFilm}`);
  }
  getDettagli(id: string) {
    return this.http.get(`${this.ricercaUrl}${id}`);
  }

}
