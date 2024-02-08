import { Component, OnInit, OnDestroy, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { IBook, BookModel } from "../models/book.model";
import { BookService } from "../services/book.service";


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  books: IBook[] = [];
  bookForm: FormGroup;
  newBookForm: FormGroup;
  editingBookIndex: number | null = null;

  constructor(private bookService: BookService, private fb: FormBuilder, private router: Router) {
    this.bookForm = this.fb.group({
      title: [''],
      author: [''],
      publicationYear: [''],
      synopsis: ['']
    });
    this.newBookForm = this.fb.group({
      title: [''],
      author: [''],
      publicationYear: [''],
      synopsis: ['']
    });
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

  removeBook(index: number): void {
    this.bookService.removeBook(index);
  }



  saveBook(): void {
    if (this.editingBookIndex !== null) {
      this.bookService.updateBook(this.editingBookIndex, new BookModel(
        this.bookForm.value.title,
        this.bookForm.value.author,
        this.bookForm.value.publicationYear,
        this.bookForm.value.synopsis
      ));

    }
  }


  createBook(): void {
    this.bookService.addBook(new BookModel(
      this.newBookForm.value.title,
      this.newBookForm.value.author,
      this.newBookForm.value.publicationYear,
      this.newBookForm.value.synopsis
    ));

  }

  backToHome() {
    this.router.navigate(['home']);
  }
}
