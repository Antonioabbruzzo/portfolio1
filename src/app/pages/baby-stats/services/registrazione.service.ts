import { Injectable } from '@angular/core';
import { IUser, User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {
  usersArray: IUser[] = [];
  presentUser: string | undefined = undefined;
  constructor() { }

  saveUsers(obj: IUser) {
    const existingUser = this.usersArray.find((user) => user.name === obj.name);
    if (existingUser) {
      this.presentUser = 'User name presente';
    } else {
      this.usersArray.push(new User(obj));
      localStorage.setItem('Users', JSON.stringify(this.usersArray));
    }
    return this.usersArray;
  }

  returnAlert() {
    return this.presentUser;
  }

  resetAler() {
    this.presentUser = undefined;
  }


}
