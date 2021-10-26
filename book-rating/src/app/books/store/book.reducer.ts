import { Action, createReducer, on } from '@ngrx/store';
import { Book } from '../shared/book';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};


export const reducer = createReducer(
  initialState,

  // "lade bitte die Liste"
  on(BookActions.loadBooks, (state): State => {
    return {
      ...state,
      loading: true
    };
  }),

  // "Liste erfolgreich geladen, hier sind die Bücher!"
  on(BookActions.loadBooksSuccess, (state, action): State => {
    return {
      ...state,
      loading: false,
      books: action.data
    }
  }),

  // Fehler beim Laden der Liste
  on(BookActions.loadBooksFailure, (state, action): State => {
    return {
      ...state,
      loading: false
    }
  }),

);

