

import { Injectable } from '@angular/core';
import { IBaby } from '../models/baby.model';
import { IMeal, Meal } from '../models/meal.model';
import { INanna } from '../models/nanna.model';
import { IPee } from '../models/pip.model';
import { IPoop, Poop } from '../models/poop.model';

@Injectable({
  providedIn: 'root'
})
export class BabyService {
  babyArray: IBaby[] = [];
  babyPappe: Meal[] = [];
  babyNanna: INanna[] = [];
  babyPoop: IPoop[] = [];
  babePee: IPee[] = [];
  constructor() { }

  addBaby(obj: IBaby) {
    console.log(this.babyArray);
    this.babyArray.push(obj);
    localStorage.setItem('Baby', JSON.stringify(this.babyArray));
    return this.babyArray;
  }

  takeBaby() {
    const user = localStorage.getItem('Baby');
    if (user) {
      this.babyArray = JSON.parse(user);
    }

    return this.babyArray;
  }

  trackPappe(obj: IMeal) {
    this.babyPappe.push(obj);
    localStorage.setItem('Pappe', JSON.stringify(this.babyPappe));


  }
  trackNanne(obj: INanna) {
    this.babyNanna.push(obj);
    localStorage.setItem('Nanna', JSON.stringify(this.babyNanna));
  }

  getNanna() {
    const user = localStorage.getItem('Nanna');
    if (user) {
      this.babyNanna = JSON.parse(user);
    }
    return this.babyNanna;
  }

  getPappe() {
    const user = localStorage.getItem('Pappe');
    if (user) {
      this.babyPappe = JSON.parse(user);
    }
    return this.babyPappe;
  }

  getPee() {
    const user = localStorage.getItem('Pee');
    if (user) {
      this.babePee = JSON.parse(user);
    }
    return this.babePee;
  }

  trackPee(obj: IPee) {
    this.babePee.push(obj);
    localStorage.setItem('Pee', JSON.stringify(this.babePee));
  }

  getPoop() {
    const user = localStorage.getItem('Poo');
    if (user) {
      this.babyPoop = JSON.parse(user);
    }
    return this.babyPoop;
  }

  trackPoop(obj: Poop) {
    this.babyPoop.push(obj);
    localStorage.setItem('Poo', JSON.stringify(this.babyPoop));
  }

}
