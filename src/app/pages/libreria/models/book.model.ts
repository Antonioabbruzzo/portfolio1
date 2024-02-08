export interface IBook {
  title: string;
  author: string;
  publicationYear: number;
  synopsis: string;
}

export class BookModel implements IBook {
  constructor(
    public title: string,
    public author: string,
    public publicationYear: number,
    public synopsis: string
  ) { }
}
