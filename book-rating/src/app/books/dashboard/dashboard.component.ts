import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /** This is the book list */
  books: Book[] = [];

  constructor(private rs: BookRatingService) {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        rating: 5,
        price: 36.9
      },
      {
        isbn: '111',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        rating: 3,
        price: 32.9
      }
    ];
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
