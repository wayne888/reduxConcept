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

  dispatch(message: string) {
    this.state = calculateState(this.state, message);
    this.state$.next(this.state);
  }
}

export function calculateState(state: BookState, message: string): BookState {
  switch (message) {
    case 'ADD BOOK': {
      return { ...state, books: [...state.books, 'new book'] };
    }
    case 'DELETE BOOK': {
      return { ...state, books: state.books.slice(0, state.books.length - 2) };
    }
    default:
      return state;
  }
}

export interface BookState {
  books: string[];
}
