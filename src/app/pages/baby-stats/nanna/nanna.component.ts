import { Component, OnInit } from '@angular/core';
import { Nanna } from '../models/nanna.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BabyService } from '../services/baby.service';

@Component({
  selector: 'app-nanna',

  templateUrl: './nanna.component.html',
  styleUrl: './nanna.component.scss'
})
export class NannaComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  nannaArray: Nanna[] = [];
  nanna: Nanna[] = [{
    date: undefined,
    duration: 0,
    note: ''
  }];

  nannaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private babyService: BabyService) {

    this.nannaForm = this.fb.group({
      date: ['', Validators.required],
      duration: ['', Validators.required],
      note: ['', Validators.required],
    }

    );
  }
  ngOnInit(): void {
    this.takeNanne();
    this.chart();
  }

  takeNanne() {
    this.nannaArray = this.babyService.getNanna();
  }

  registerNannee() {
    this.babyService.trackNanne(this.nannaForm.value);
    this.takeNanne();
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
    const note = this.nannaArray.map(note => note.note);
    const sleep = this.nannaArray.map(peso => peso.duration);

    this.basicData = {
      labels: note,
      datasets: [
        {
          label: 'Sleep',
          data: sleep,
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
