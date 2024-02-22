import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/users.model';


@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: string;
  password: string;
  userLogin: IUser[] = [];

  constructor(private router: Router) {
    const user = localStorage.getItem('Users');
    if (user) {
      this.userLogin = JSON.parse(user);
    }
  }

  goToRegistrer() {
    this.router.navigate(['baby/registrazione']);
  }


  goToHome() {

    const userNam = this.userLogin.find(user => user.name === this.userName);

    if (userNam) {
      this.router.navigate(['baby/home']);
    } else {
      window.alert('Credenziali non valide');
    }
  }



}

