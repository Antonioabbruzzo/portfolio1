import { Component } from '@angular/core';
import { BabyService } from '../services/baby.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Poop } from '../models/poop.model';

@Component({
  selector: 'app-pupu',

  templateUrl: './pupu.component.html',
  styleUrl: './pupu.component.scss'
})
export class PupuComponent {
  basicData: any;
  basicOptions: any;
  poopBaby: Poop[] = [];
  poop: Poop[] = [{
    date: undefined,
    note: '',
    weight: 0
  }];


  poopForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private babyService: BabyService) {

    this.poopForm = this.fb.group({
      date: ['', Validators.required],
      weight: ['', Validators.required],
      note: ['', Validators.required],
    }

    );
  }
  ngOnInit(): void {
    this.takePoop();
    this.chart();
  }

  takePoop() {
    this.poopBaby = this.babyService.getPoop();
  }

  registerPoop() {
    this.babyService.trackPoop(this.poopForm.value);
    this.takePoop();
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
    const note = this.poopBaby.map(note => note.note);
    const poop = this.poopBaby.map(peso => peso.weight);

    this.basicData = {
      labels: note,
      datasets: [
        {
          label: 'Poop',
          data: poop,
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
