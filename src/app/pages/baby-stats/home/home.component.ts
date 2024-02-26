import { Component, OnInit } from '@angular/core';
import { BabyService } from '../services/baby.service';
import { IBaby, Meal } from '../models/baby.model';
import { Router } from '@angular/router';
import { INanna, Nanna } from '../models/nanna.model';
import { IPee } from '../models/pip.model';
import { IPoop } from '../models/poop.model';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  baby: IBaby[] = [];
  poop: IPoop[] = [];
  lastPoop: IPoop = {
    date: undefined,
    weight: 0,
    note: ''
  };
  pee: IPee[] = [];
  lastPee: IPee = {
    date: undefined,
    weight: 0,
    note: ''
  };
  nanna: INanna[] = [];
  utimaNanna: Nanna = {
    date: undefined,
    duration: 0,
    note: ''
  };
  pappa: Meal[] = [];
  ultimaPappa: Meal = {
    date: undefined,
    weight: 0,
    note: ''
  };
  constructor(private babyService: BabyService, private router: Router) {
    this.pappa = this.babyService.getPappe();
    this.ultimaPappa = this.pappa[this.pappa.length - 1];
    this.nanna = this.babyService.getNanna();
    this.utimaNanna = this.nanna[this.nanna.length - 1];
    this.pee = this.babyService.getPee();
    this.lastPee = this.pee[this.pee.length - 1];
    this.poop = this.babyService.getPoop();
    this.lastPoop = this.poop[this.poop.length - 1];
  }
  ngOnInit(): void {
  }

  goToSetting() {
    this.router.navigate(['baby/setting']);
  }
  goToMeal() {
    this.router.navigate(['baby/pappe']);
  }
  goToNanna() {
    this.router.navigate(['baby/nanne']);
  }
  goToPee() {
    this.router.navigate(['baby/pipi']);
  }
  goToPoop() {
    this.router.navigate(['baby/popo']);
  }

}
