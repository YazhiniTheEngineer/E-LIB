import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private bookName = new BehaviorSubject('default message');
  currentName = this.bookName.asObservable();

  changeName(message: string) {
    this.bookName.next(message)
  }
}
