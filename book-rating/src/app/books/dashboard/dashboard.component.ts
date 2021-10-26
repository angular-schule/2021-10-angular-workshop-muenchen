import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { loadBooks } from '../store/book.actions';
import { selectBooks } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /** This is the book list */
  books: Book[] = [];

  MAX_RATING = this.rs.MAX_RATING;
  MIN_RATING = this.rs.MIN_RATING;

  constructor(private rs: BookRatingService, private bs: BookStoreService, private store: Store) {
    this.store.dispatch(loadBooks());

    // eslint-disable-next-line ngrx/no-store-subscription
    this.store.select(selectBooks).subscribe(books => {
      this.books = books;
    });
  }

  ngOnInit(): void {}

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    this.books = this.books
      .map(book => (book.isbn === ratedBook.isbn) ? ratedBook : book);
  }

}
