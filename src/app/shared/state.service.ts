import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, shareReplay, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state: BookState = {
    books: [],
  };

  messages$ = new Subject<string>();

  state$ = this.messages$.pipe(
    startWith('initial message'),
    scan(calculateState, this.state),
    shareReplay(1)
  );

  dispatch(message: string) {
    this.messages$.next(message);
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
