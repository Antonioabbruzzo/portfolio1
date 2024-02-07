import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  wizardsUrls = 'https://wizard-world-api.herokuapp.com/Wizards';
  ingredientsUrl = 'https://wizard-world-api.herokuapp.com/Elixirs';
  ingredientDetailUrl = 'https://wizard-world-api.herokuapp.com/Ingredients';

  constructor(private http: HttpClient) { }

  getWizards() {
    return this.http.get(this.wizardsUrls);
  }

  getSingleWizard(id: string) {
    return this.http.get(`${this.wizardsUrls}/${id}`);
  }

  getIngredients(id: string) {
    return this.http.get(`${this.ingredientsUrl}/${id}`);
  }

  getIngredientsDetail(id: string) {
    return this.http.get(`${this.ingredientDetailUrl}/${id}`);
  }

}
