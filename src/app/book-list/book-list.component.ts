import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StateService } from './../shared/state.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rb-book-list',
  template: `
    <div *ngFor="let book of books$ | async">{{ book }}</div>
    <button (click)="addBook()">Buch hinzufügen</button>
  `,
})
export class BookListComponent implements OnInit {
  books$ = this.service.state$.pipe(map((state) => state.books));

  constructor(private service: StateService) {}

  ngOnInit(): void {}

  addBook(): void {
    this.service.addBook();
  }
}
