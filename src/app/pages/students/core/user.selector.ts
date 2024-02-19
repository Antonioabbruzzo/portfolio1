import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IModel } from "../model/object.model";

export const selectStudentsState = createFeatureSelector<IModel[]>('app');

export const selectAllStudents = createSelector(
  selectStudentsState,
  students => students
);

export const selectStudentById = (studentId: number) => createSelector(
  selectAllStudents,
  students => students.find(student => student.id === studentId)
);