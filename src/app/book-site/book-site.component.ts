import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-book-site',
  template: `
    <rb-toolbar [books]="books"></rb-toolbar>
    <rb-book-list (newBookEvent)="passBook($event)"></rb-book-list>
  `,
})
export class BookSiteComponent implements OnInit {
  books: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  passBook(books: string[]): void {
    this.books = books;
  }

}
