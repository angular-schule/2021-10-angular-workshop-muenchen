import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
    // Synchroner Weg (PULL)
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);

    // Asynchroner Weg (PUSH)
    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')!),
      switchMap(isbn => this.bs.getSingle(isbn))
    );

    /*
    Aufgabe: Buch abrufen und anzeigen
    - BookStoreService nutzen
    - Template erweitern (ganz einfach halten!)
    */

  }

  ngOnInit(): void {
  }

}


/*
  - Redirect ✅
  - Links ✅
  - Detailseite
    - ISBN lesen ✅
    - HTTP
    - Anzeige/Template
*/
