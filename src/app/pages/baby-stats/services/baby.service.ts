import { Injectable } from '@angular/core';
import { IBaby } from '../models/baby.model';

@Injectable({
  providedIn: 'root'
})
export class BabyService {
  babyArray: IBaby[] = [];

  constructor() { }

  getBaby(obj: IBaby) {
    console.log(this.babyArray);
    this.babyArray.push(obj);
    localStorage.setItem('Baby', JSON.stringify(this.babyArray));
    return this.babyArray;
  }

}
