
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IModel } from '../../model/object.model';
import { ManageService } from '../../services/manage.service';
import { addStudent } from '../../core/user.action';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss']
})
export class CreateDataComponent {

  singleData: IModel = {
    name: '',
    description: '',
    id: 0,
    showEdit: false,
    vote: 0,
    cfu: 0
  };

  constructor(private manage: ManageService) {

  }

  compileForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    id: new FormControl(''),
    vote: new FormControl(''),
    cfu: new FormControl('')
  });

  addSingleData() {

    const newStudent: IModel = {
      name: this.compileForm.get('title')?.value || '',
      description: this.compileForm.get('description')?.value || '',
      id: this.compileForm.get('id')?.value || 0,
      showEdit: false,
      vote: this.compileForm.get('vote')?.value || 0,
      cfu: this.compileForm.get('cfu')?.value || 0,
    };


    this.manage.addData(newStudent);

  }

}
