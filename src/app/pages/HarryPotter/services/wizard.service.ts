import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WizardService {

  Ids: any[] = [];

  constructor() { }

  takeId(id: string) {
    this.Ids.push(id);
    console.log(this.Ids);

    return this.Ids[0];
  }


  reset() {
    this.Ids = [];
  }

}
