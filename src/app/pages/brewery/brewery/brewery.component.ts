import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IBrewery } from '../model/brewery.model';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brewery',

  templateUrl: './brewery.component.html',
  styleUrl: './brewery.component.scss'
})
export class BreweryComponent {
  singleBrewery: IBrewery = {
    id: 'string',
    name: 'string',
    brewery_type: 'string',
    address_1: 'string',
    address_2: 'string',
    address_3: 'string',
    city: 'Norman',
    state_province: 'string',
    postal_code: 'number',
    country: 'string',
    longitude: 'number',
    latitude: 'number',
    phone: '4058160490number',
    website_url: 'string',
    state: 'string',
    street: 'string'
  };
  filterTerm: string = '';
  breweryList: IBrewery[] = [];
  breweyId: any;

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getBrewery();
  }


  goTo(id: string) {
    this.router.navigate(['brewery/singleBrewey', id]);
  }

  newFind: FormGroup = new FormGroup({
    name: new FormControl('')
  });



  getBrewery() {
    this.apiService.getBrewery().subscribe({
      next: (value: any) => {
        this.breweryList = value;

      }
    });
  }



  applyFilter(): void {
    if (this.filterTerm) {
      this.breweryList = this.breweryList.filter(team =>
        team.name.toLowerCase().includes(this.filterTerm.toLowerCase()));

    } else {
      this.getBrewery();
    }
  }
}
