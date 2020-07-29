import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { Breach } from '../models/breach.model';
import { map } from 'rxjs/operators';

interface Response {
  items: Breach[];
}

@Injectable({
  providedIn: 'root'
})
export class BreachService {

  private readonly _items = new BehaviorSubject<Breach[]>([]);
  public items$ = this._items.asObservable();

  get items(): Breach[] {
    return this._items.getValue();
  }

  set items(val: Breach[]) {
    this._items.next(val);
  }

  public offset: number = 0;

  constructor(
    private readonly http: HttpClient
  ) { }

  loadNewBreaches() {
    if (this.offset === 0) {
      forkJoin({
        firstChunk: this.transformObservale(this.http.get(`${environment.api}${this.offset}`)),
        secondChunk: this.transformObservale(this.http.get(`${environment.api}${this.offset + 10}`))
      })
        .subscribe((res) => {
          this.offset = 20;
          this.items = [
            ...this.items,
            ...res.firstChunk,
            ...res.secondChunk
          ];
        });
    } else {
      this.transformObservale(this.http.get(`${environment.api}${this.offset}`))
        .subscribe((res: Breach[]) => {
          this.offset += 10;
          this.items = [
            ...this.items,
            ...res
          ];
        });
    }
  }

  transformObservale(obs: Observable<any>) {
    return obs.pipe(
      map((res: Response) => res.items)
    );
  }

}
