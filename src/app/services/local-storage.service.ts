import { Injectable } from '@angular/core';
import { Breach } from '../models/breach.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public key: string = 'BREACH';
  public lastScrollPosition: number = 0;

  constructor() { }

  public set(breach: Breach) {
    this.setAsString(this.key, JSON.stringify(breach));
  }

  public get(): Breach {
    const item = this.getAsString(this.key);
    return item ? JSON.parse(item) : null;
  }

  public getAsString(key: string): string {
    var item = window.localStorage.getItem(key);
    return item ? item : null;
  }

  public setAsString(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

}
