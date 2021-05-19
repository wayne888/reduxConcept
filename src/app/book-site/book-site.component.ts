import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-book-site',
  template: `
    <rb-toolbar></rb-toolbar>
    <rb-book-list></rb-book-list>
  `,
})
export class BookSiteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
