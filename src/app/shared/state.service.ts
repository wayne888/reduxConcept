import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state: BookState = {
    books: [],
  };

  state$ = new BehaviorSubject<BookState>(this.state);

  addBook() {
    this.state.books.push('new book');
    this.state$.next(this.state);
  }
}

export interface BookState {
  books: string[];
}
