import { Component } from '@angular/core';
import { IBrewery } from '../model/brewery.model';
import { ApiServiceService } from '../services/api-service.service';
import { BreweryService } from '../services/brewery.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-brewery',

  templateUrl: './single-brewery.component.html',
  styleUrl: './single-brewery.component.scss'
})
export class SingleBreweryComponent {
  singleBrewey: IBrewery = {
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
  show: boolean = false;
  idBrewery: string = '';

  constructor(private apiService: ApiServiceService, private breweryService: BreweryService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.idBrewery = params['id'];
    });
  }
  ngOnInit(): void {

    this.getSingleBrewey();
  }

  comeBack() {
    this.router.navigate(['brewery']);
  }

  getSingleBrewey() {
    setTimeout(() => {

      this.apiService.getSingleBrewery(this.idBrewery).subscribe({
        next: (value: any) => {
          this.singleBrewey = value;
        }
      });
      this.show = !this.show;
    }, 1000);
  }

  goBack() {
    this.breweryService.resetId();
  }

}
