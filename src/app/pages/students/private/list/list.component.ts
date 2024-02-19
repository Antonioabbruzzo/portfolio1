import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { IModel } from '../../model/object.model';

import { selectAllStudents } from '../../core/user.selector';
import { ManageService } from '../../services/manage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { editStudent } from '../../core/user.action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  students$: Observable<IModel[]>;
  editForm: any;

  constructor(private store: Store, private manage: ManageService, private fb: FormBuilder) {

    this.students$ = this.store.pipe(select(selectAllStudents));
    this.editForm = this.fb.group({
      name: [''],
      description: [''],
      id: [''],
      vote: ['']
    });
  }

  edit(indice: number) {
    this.students$ = this.students$.pipe(
      map((students) => {
        const updatedStudents = [...students];
        updatedStudents[indice] = {
          ...updatedStudents[indice],
          showEdit: !updatedStudents[indice].showEdit,
        };
        return updatedStudents;
      })
    );
    this.students$.subscribe((students) => {
      const selectedStudent = students[indice];
      this.editForm.patchValue({
        name: selectedStudent.name,
        description: selectedStudent.description,
        id: selectedStudent.id,
        vote: selectedStudent.vote,
        showEdit: selectedStudent.showEdit
      });
    });
  }

  editStudent(indice: number): void {
    this.students$ = this.students$.pipe(
      map((students) => {
        const updatedStudents = [...students];
        updatedStudents[indice] = {
          ...updatedStudents[indice],
          showEdit: !updatedStudents[indice].showEdit,
        };
        return updatedStudents;
      })
    );
    this.manage.editStudent(this.editForm.value);


  }


  deleteStud(studentId: number) {

    this.manage.delete(studentId);
  }
}



