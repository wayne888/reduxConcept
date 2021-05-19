import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rb-book-list',
  template: `
    <div *ngFor="let book of books">{{ book }}</div>
    <button (click)="addBook()">Buch hinzufügen</button>
  `,
})
export class BookListComponent implements OnInit {
  @Output() newBookEvent = new EventEmitter<string[]>();
  books: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  addBook(): void {
    this.books.push('new book');
    this.newBookEvent.emit(this.books);
  }
}
