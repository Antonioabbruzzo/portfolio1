import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  allBreweryUrl = 'https://api.openbrewerydb.org/v1/breweries';
  singleBrewery = 'https://api.openbrewerydb.org/v1/breweries';
  constructor(private http: HttpClient) { }

  getBrewery() {
    return this.http.get(this.allBreweryUrl);
  }

  getSingleBrewery(id: string) {
    return this.http.get(`${this.singleBrewery}/${id}`);
  }
}
