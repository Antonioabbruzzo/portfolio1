import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUser } from '../models/users.model';
import { RegistrazioneService } from '../services/registrazione.service';

@Component({
  selector: 'app-registrazione',

  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
export class RegistrazioneComponent {
  alert: any;
  usersRegistration: FormGroup;
  users: IUser;
  constructor(private fb: FormBuilder, private registrazioneUsers: RegistrazioneService, private router: Router) {
    this.usersRegistration = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });

  }


  save() {
    this.users = this.usersRegistration.value;
    this.registrazioneUsers.saveUsers(this.users);
    this.alert = this.registrazioneUsers.returnAlert();
    if (!this.alert) {
      this.router.navigate(['baby']);
    } else {
      window.alert(this.alert);
      this.registrazioneUsers.resetAler();
    }
  }

}
