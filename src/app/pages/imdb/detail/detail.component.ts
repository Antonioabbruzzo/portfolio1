import { Component } from '@angular/core';
import { IDescription } from '../model/description.model';
import { Film } from '../model/film.model';
import { ApiService } from '../services/api.service';
import { ImdbService } from '../services/imdb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  showDetail: boolean = false;
  idDettaglio: string;
  value!: number;
  details: Film[] = [{
    '#ACTORS': '',
    '#AKA': '',
    '#IMDB_ID': '',
    '#IMDB_IV': '',
    '#IMDB_URL': '',
    '#IMG_POSTER': '',
    '#RANK': 0,
    '#TITLE': '',
    '#YEAR': 0,
  }];
  responseFromApi: IDescription | undefined;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idDettaglio = params['id'];
    });

    this.getFilm();

  }



  getFilm() {
    this.apiService.getDettagli(this.idDettaglio).subscribe({
      next: (value: any) => {
        this.responseFromApi = value;

      }
    });
    setTimeout(() => {
      if (this.responseFromApi) {
        this.details = this.responseFromApi.description;
      }
      this.showDetail = !this.showDetail;
    }, 1200);
  }

  back() {
    this.router.navigate(['imdb']);
  }

}

