import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

/**
 * This is a component to display one single book
 *
 * Example:
 * ```
 * <br-book [book]="myBook"></br-book>
 * ```
 */
@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Output() rateUp = new EventEmitter<Book>(); // from @angular/core
  @Output() rateDown = new EventEmitter<Book>();

  @Input() book?: Book;
  @Input() min = 0;
  @Input() max = 7;

  constructor() {}

  ngOnInit(): void {}

  getStars() {
    return new Array(this.book?.rating);
  }

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }

}
