import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSiteComponent } from './book-site.component';

describe('BookSiteComponent', () => {
  let component: BookSiteComponent;
  let fixture: ComponentFixture<BookSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
