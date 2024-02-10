import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { IBook } from "../models/book.model";
import { BookService } from "../services/book.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  books: IBook[] = [];

  constructor(private router: Router, private bookService: BookService) { }
  maxLenght: number = 40;
  delet: boolean = true;

  showDescription(book: IBook) {

  }

  ngOnInit(): void {
    this.bookService.books$
      .pipe(takeUntil(this.destroy$))
      .subscribe(books => this.books = books);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goToLibrary() {
    this.router.navigate(['libreria/library']);
  }
}
