import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WizardService {

  Ids: any[] = [];

  constructor() { }

  takeId(id: string) {
    this.Ids.push(id);


    return this.Ids[0];
  }


  reset() {
    this.Ids = [];
  }

}
