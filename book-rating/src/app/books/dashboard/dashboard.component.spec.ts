import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const ratingMock = {
      rateUp: (book: Book) => book,
      rateDown: (book: Book) => book
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        // BRS ersetzen: Wenn jemand den Service anfordert, wird stattdessen
        // die Variable ratingMock ausgeliefert
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for doRateUp()', () => {
    // Arrange
    const rs = TestBed.inject(BookRatingService);
    // Methode rateUp überwachen, aber Aufrufe an originales Objekt rs durchleiten
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    const book = { isbn: '111' } as Book
    component.doRateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalledTimes(1);
    expect(rs.rateUp).toHaveBeenCalledWith(book);
  });
});
