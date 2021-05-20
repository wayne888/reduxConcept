import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookState, StateService } from './../shared/state.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rb-toolbar',
  template: `
    {{ booksLength$ | async }}
    <hr />
  `,
})
export class ToolbarComponent implements OnInit {
  booksLength$ = this.service.state$.pipe(map((state) => state.books.length));

  constructor(private service: StateService) {}

  ngOnInit(): void {}
}
