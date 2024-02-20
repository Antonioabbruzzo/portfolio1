import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';


import { IModel } from '../../model/object.model';

import { selectAllStudents } from '../../core/user.selector';
import { ManageService } from '../../services/manage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { editStudent } from '../../core/user.action';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  students: IModel[];
  editForm: FormGroup;
  media: number;
  totalCfu: number;
  constructor(private store: Store, private manage: ManageService, private fb: FormBuilder) {
    this.store.pipe(select(selectAllStudents)).subscribe((students) => {
      this.students = students;
      this.calcolaMediaPonderata();
    });

    this.editForm = this.fb.group({
      name: [''],
      description: [''],
      id: [''],
      vote: [''],
      cfu: [''],
      showEdit: []
    });
  }
  calcolaMediaPonderata(): void {
    if (this.students && this.students.length > 0) {
      let sommaVotiPonderati = 0;
      let sommaCfu = 0;

      this.students.forEach(student => {
        sommaVotiPonderati += student.vote * student.cfu;
        sommaCfu += student.cfu;
      });
      console.log(sommaVotiPonderati, sommaCfu);

      this.media = sommaVotiPonderati / sommaCfu;
    } else {
      this.media = 0;
    }

  }

  edit(indice: number): void {
    const updatedStudents = [...this.students];
    updatedStudents[indice] = {
      ...updatedStudents[indice],
      showEdit: !updatedStudents[indice].showEdit,
    };
    this.students = updatedStudents;

    const selectedStudent = this.students[indice];
    if (selectedStudent) {
      this.editForm.patchValue({
        name: selectedStudent.name,
        description: selectedStudent.description,
        id: selectedStudent.id,
        vote: selectedStudent.vote,
        cfu: selectedStudent.cfu,
        showEdit: !selectedStudent.showEdit,
      });
    }

  }

  editStudent(indice: number): void {

    const updatedStudent = this.editForm.value;
    this.store.dispatch(editStudent({ index: indice, updatedStudent: updatedStudent }));


  }

  deleteStud(studentId: number) {
    this.manage.delete(studentId);
  }
}



