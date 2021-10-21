import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly MAX_RATING = 5;
  readonly MIN_RATING = 1;

  constructor() { }

  rateUp(book: Book): Book {
    return {
      ...book,
      rating: book.rating < this.MAX_RATING ? book.rating + 1 : this.MAX_RATING
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(book.rating - 1, this.MIN_RATING)
    };
  }
}
