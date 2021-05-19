import { Component, Input, OnInit } from '@angular/core';
import { StateService } from './../shared/state.service';

@Component({
  selector: 'rb-toolbar',
  template: `
    {{ service.state.books.length }}
    <hr />
  `,
})
export class ToolbarComponent implements OnInit {
  books: string[] = [];

  constructor(public service: StateService) {}

  ngOnInit(): void {}
}
