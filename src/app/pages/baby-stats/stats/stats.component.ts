import { Component } from '@angular/core';
import { IPee } from '../models/pip.model';
import { IPoop } from '../models/poop.model';
import { INanna } from '../models/nanna.model';
import { IMeal } from '../models/meal.model';
import { BabyService } from '../services/baby.service';
import { IBaby } from '../models/baby.model';

@Component({
  selector: 'app-stats',

  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  peeArray: IPee[] = [];
  poopArray: IPoop[] = [];
  nannaArray: INanna[] = [];
  foodArray: IMeal[] = [];
  babyInfo: IBaby[] = [];
  data: any;
  options: any;

  constructor(private babyService: BabyService) {
    this.poopArray = this.babyService.getPoop();
    this.peeArray = this.babyService.getPee();
    this.nannaArray = this.babyService.getNanna();
    this.foodArray = this.babyService.getPappe();
  }


  ngOnInit() {
    this.babyInfo = this.babyService.takeBaby();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const poop = this.poopArray.map(peso => peso.weight);
    const pee = this.peeArray.map(peso => peso.weight);
    const food = this.foodArray.map(peso => peso.weight);
    const sleep = this.nannaArray.map(peso => peso.duration);
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Poop',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          yAxisID: 'y',
          tension: 0.4,
          data: poop
        },
        {
          label: 'Pee',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          yAxisID: 'y1',
          tension: 0.4,
          data: pee
        }
        ,
        {
          label: 'food',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--red-500'),
          yAxisID: 'y1',
          tension: 0.4,
          data: food
        }
        ,
        {
          label: 'sleep',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--orange-500'),
          yAxisID: 'y1',
          tension: 1,
          data: sleep
        }
      ]
    };

    this.options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.4,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: textColorSecondary
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder
          }
        }
      }
    };
  }
}

