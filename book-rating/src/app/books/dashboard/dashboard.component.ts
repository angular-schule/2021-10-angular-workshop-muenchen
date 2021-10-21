import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

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

  constructor(private rs: BookRatingService, private bs: BookStoreService) {
    this.bs.getAll().subscribe(books => {
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
