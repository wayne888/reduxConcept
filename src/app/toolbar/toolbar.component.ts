import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-toolbar',
  template: `
    {{ books.length }}
    <hr />
  `,
})
export class ToolbarComponent implements OnInit {
  @Input() books: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
