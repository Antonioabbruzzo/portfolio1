import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { WizardService } from '../services/wizard.service';
import { Wizard } from '../models/wizard.model';
import { Potion } from '../models/potions.model';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
  styleUrl: './wizards.component.scss'
})
export class WizardsComponent {
  potions: Potion = {
    "id": "string",
    "name": "string",
    "effect": "string",
    "sideEffects": "string",
    "characteristics": "string",
    "time": "string",
    "difficulty": "Unknown",
    "ingredients": [{ id: "string", name: "string", }],
    "inventors": [{ id: "string", firstName: "string", lastName: "string", }],
    "manufacturer": "string"
  };
  idPotion: string = '';
  callPotions: boolean = false;


  wizards: Wizard[] = [
    {
      "elixirs": [
        { id: "string", name: "string", }
      ],
      "id": "string",
      "firstName": "string",
      "lastName": "string",
    }];

  constructor(private apiService: ApiServiceService, private maghi: WizardService, private router: Router) { }
  ngOnInit(): void {
    this.getwizard();
  }

  goTo(id: string) {
    this.router.navigate(['harrypotter/detail', id]);


  }

  getwizard() {
    this.apiService.getWizards().subscribe({
      next: (value: any) => {
        this.wizards = value;
      }
    });
  }

  visible: boolean = false;

  showDialog() {


    this.visible = true;
  }


  getPotion(id: string) {


    this.apiService.getIngredients(id).subscribe({
      next: (value: any) => {
        this.potions = value;


      }
    });
  }
}
