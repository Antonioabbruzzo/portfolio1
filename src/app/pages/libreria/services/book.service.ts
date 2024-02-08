import { Injectable } from '@angular/core';
import { BookModel, IBook } from '../models/book.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: IBook[] = [
    new BookModel('Il nome della rosa', 'Umberto Eco', 1980, 'Un misterioso crimine in un monastero...'),
    new BookModel('1984', 'George Orwell', 1949, 'Una società distopica e totalitaria...'),
    new BookModel('Lo straniero', 'Albert Camus', 1942, "L'opera, divisa in due parti, racconta..."),
    new BookModel('Alla ricerca del tempo perduto', 'Marcel Proust', 1927, 'Il primo libro narra...'),
    new BookModel('Il piccolo principe', 'Antoine de Saint-Exupéry', 1943, 'Un pilota di aerei, precipitato nel deserto del Sahara...')
  ];

  private booksSubject: BehaviorSubject<IBook[]> = new BehaviorSubject(this.books);
  public books$: Observable<IBook[]> = this.booksSubject.asObservable();

  constructor() { }

  addBook(book: IBook): void {
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  removeBook(index: number): void {
    this.books.splice(index, 1);
    this.booksSubject.next(this.books);
  }

  updateBook(index: number, book: IBook): void {
    this.books[index] = book;
    this.booksSubject.next(this.books);
  }
}
