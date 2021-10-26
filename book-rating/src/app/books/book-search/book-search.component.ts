import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('');

  results$: Observable<Book[]>;

  constructor(private bs: BookStoreService) {
    this.results$ = this.searchControl.valueChanges.pipe(
      filter((term: string) => term.length >= 3),
      debounceTime(500),
      switchMap(term => this.bs.search(term))
    );

    /*
    - Suchbegriff muss mindestens 3 Zeichen lang sein (bitte NICHT mit einem Validator, sondern mit RxJS)
    - erst suchen, wenn Nutzer für einige Zeit die Finger stillhält
    - Suchbegriff soll Suche auf dem Server auslösen
    - Ergebnisse anzeigen (ganz einfach!!)
    */
  }

  ngOnInit(): void {
  }

}
