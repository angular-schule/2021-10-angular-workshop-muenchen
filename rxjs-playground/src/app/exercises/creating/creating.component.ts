import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    timer(200, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      next: e => this.log(e),
      error: err => this.log('ERROR ' + err),
      complete: () => this.log('COMPLETE')
    });



    /******************************/

    function producer(o: any) {
      o.next(Math.random());
      o.next(2);
      o.next(3);
      o.complete();

      /*setTimeout(() => {
        o.next(2);
      }, 2000);

      setTimeout(() => {
        o.complete();
      }, 3000)*/
    }
    const myObservable$ = new Observable(producer);

    //////////

    const obs = {
      next: (value: any) => console.log(value),
      error: (err: any) => console.error(err),
      complete: () => console.log('Complete')
    };
    // producer(obs);

    // myObservable$.subscribe(obs);


    /*
    // so KÖNNTE die Klasse Observable implementiert sein
    class Observable {
      constructor(private producer: any) {}

      subscribe(obs) {
        const subscriber = this.sanitizeObserver(obs)
        this.producer(subscriber);
      }
    }
    */



    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
