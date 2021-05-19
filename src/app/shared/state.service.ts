import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  state: BookState = {
    books: []
  };

  addBook() {
    this.state.books.push("new book");
  }
}

export interface BookState {
  books: string[]
}
