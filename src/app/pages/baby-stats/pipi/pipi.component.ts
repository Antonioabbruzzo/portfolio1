import { Component } from '@angular/core';
import { BabyService } from '../services/baby.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Pee } from '../models/pip.model';

@Component({
  selector: 'app-pipi',

  templateUrl: './pipi.component.html',
  styleUrl: './pipi.component.scss'
})
export class PipiComponent {
  basicData: any;
  basicOptions: any;
  peeBaby: Pee[] = [];
  pee: Pee[] = [{
    date: undefined,
    note: '',
    weight: 0
  }];


  peeForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private babyService: BabyService) {

    this.peeForm = this.fb.group({
      date: ['', Validators.required],
      weight: ['', Validators.required],
      note: ['', Validators.required],
    }

    );
  }
  ngOnInit(): void {
    this.takePee();
    this.chart();
  }

  takePee() {
    this.peeBaby = this.babyService.getPee();
  }

  registerPee() {
    this.babyService.trackPee(this.peeForm.value);
    this.takePee();
    this.chart();
  }


  comeBackHome() {
    this.router.navigate(['baby/home']);
  }

  chart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const note = this.peeBaby.map(note => note.note);
    const pee = this.peeBaby.map(peso => peso.weight);

    this.basicData = {
      labels: note,
      datasets: [
        {
          label: 'Pee',
          data: pee,
          backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
          borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

  }

}
