import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable, timer } from 'rxjs';
import { share } from 'rxjs/operators';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent {

  listeners: string[] = [];
  logStream$ = new ReplaySubject<string>();

  measureValues$: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) {
    /**************!!**************/

    // share: kaltes Observable heiß machen
    // this.measureValues$ = this.mvs.getValues().pipe(shareReplay(1));
    // shareReplay ist ab RxJS 7 deprecated!

    this.measureValues$ = new ReplaySubject(3);
    this.mvs.getValues().subscribe(this.measureValues$);



    /**************!!**************/

  }

  addListener() {
    this.listeners.push(this.es.generateRandomString());
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString();
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
