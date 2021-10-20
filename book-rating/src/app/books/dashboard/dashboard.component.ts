import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /** This is the book list */
  books: Book[] = [];

  constructor() {
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

}
