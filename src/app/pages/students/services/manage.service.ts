import { deleteStudent, editStudent } from './../core/user.action';
import { Injectable } from '@angular/core';
import { IModel } from '../model/object.model';
import { Store } from '@ngrx/store';
import { addStudent } from '../core/user.action';


@Injectable({
  providedIn: 'root'
})
export class ManageService {

  dataCollection: IModel[] = [];

  constructor(private store: Store) { }


  addData(student: IModel) {
    this.store.dispatch(addStudent({ student }));
  }

  editStudent(updatedStudent: IModel): void {
    this.store.dispatch(editStudent({ updatedStudent }));
  }

  delete(studentId: number): void {
    this.store.dispatch(deleteStudent({ studentId }));
  }

}
