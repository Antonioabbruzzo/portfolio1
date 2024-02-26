
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BabyService } from '../services/baby.service';
import { Meal } from '../models/baby.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pappe',
  templateUrl: './pappe.component.html',
  styleUrl: './pappe.component.scss'
})
export class PappeComponent implements OnInit {
  pappeArray: Meal[] = [];
  pappe: Meal[] = [{
    date: undefined,
    weight: 0,
    note: ''
  }];
  pappeForm: FormGroup;
  basicData: any;

  basicOptions: any;
  constructor(private babyService: BabyService, private fb: FormBuilder, private router: Router) {
    this.pappeForm = this.fb.group({
      date: ['', Validators.required],
      weight: ['', Validators.required],
      note: ['', Validators.required]
    });

  }
  ngOnInit(): void {
    this.takePappe();
    this.chart();
  }

  takePappe() {
    this.pappeArray = this.babyService.getPappe();
  }

  registerPappe() {
    this.babyService.trackPappe(this.pappeForm.value);
    this.takePappe();
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
    const pappeName = this.pappeArray.map(note => note.note);
    const weightBabyFoods = this.pappeArray.map(peso => peso.weight);

    this.basicData = {
      labels: pappeName,
      datasets: [
        {
          label: 'Food',
          data: weightBabyFoods,
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
