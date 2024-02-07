import { Injectable } from '@angular/core';
import { IBrewery } from '../model/brewery.model';


@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  brewery: IBrewery = {
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

  breweyId: any[] = [];

  constructor() { }

  saveId(id: string) {
    this.breweyId.push(id);

    return this.breweyId[0];

  }


  resetId() {
    this.breweyId = [];
    return this.breweyId;
  }
}
