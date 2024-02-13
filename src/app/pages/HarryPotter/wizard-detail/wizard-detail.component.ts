import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IWizard } from '../models/wizard.model';
import { ApiServiceService } from '../services/api-service.service';
import { WizardService } from '../services/wizard.service';

@Component({
  selector: 'app-wizard-detail',

  templateUrl: './wizard-detail.component.html',
  styleUrl: './wizard-detail.component.scss'
})
export class WizardDetailComponent {
  idWizard: string = '';
  wizards: IWizard = {
    "elixirs": [
      { id: "string", name: "string", }
    ],
    "id": "string",
    "firstName": "string",
    "lastName": "string",
  };
  constructor(private apiServices: ApiServiceService, private maghi: WizardService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.idWizard = params['id'];
    });
    if (this.idWizard) {
      this.getDetails();
    }
  }

  goToHome() {
    this.router.navigate(['harrypotter/wizards']);
  }




  getId(id: string) {
    this.idWizard = this.maghi.takeId(id);

  }


  resetId() {

    this.maghi.reset();
  }

  getDetails() {
    this.apiServices.getSingleWizard(this.idWizard).subscribe({
      next: (value: any) => {
        this.wizards = value;

      }
    });
  }

  getidPotion(id: string) {
    this.maghi.takeId(id);


  }
}
