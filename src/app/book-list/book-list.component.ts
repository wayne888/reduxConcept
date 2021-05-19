import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StateService } from './../shared/state.service';

@Component({
  selector: 'rb-book-list',
  template: `
    <div *ngFor="let book of books">{{ book }}</div>
    <button (click)="addBook()">Buch hinzufügen</button>
  `,
})
export class BookListComponent implements OnInit {
  books: string[] = [];

  constructor(private service: StateService) {}

  ngOnInit(): void {}

  addBook(): void {
    this.service.addBook();
    this.books = this.service.state.books;
  }
}
