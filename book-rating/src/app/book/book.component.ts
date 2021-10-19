import { Component, Input, OnInit } from '@angular/core';
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

  @Input() book?: Book;

  constructor() { }

  ngOnInit(): void {}

}
