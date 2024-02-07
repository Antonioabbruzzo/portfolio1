export interface IFilm {
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_ID': string;
  '#IMDB_IV': string;
  '#IMDB_URL': string;
  '#IMG_POSTER': string;
  '#RANK': number;
  '#TITLE': string;
  '#YEAR': number;
}

export class Film implements IFilm {
  '#ACTORS': string = '';
  '#AKA': string = '';
  '#IMDB_ID': string = '';
  '#IMDB_IV': string = '';
  '#IMDB_URL': string = '';
  '#IMG_POSTER': string = '';
  '#RANK': number = 0;
  '#TITLE': string = '';
  '#YEAR': number = 0;

}

