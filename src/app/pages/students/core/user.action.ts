import { createAction, props } from "@ngrx/store";
import { IModel } from "../model/object.model";

//add student
export const addStudent = createAction(
  '[Student] Add Student',
  props<{ student: IModel; }>()
);

export const editStudent = createAction(
  '[Student] Edit Student',
  props<{ updatedStudent: IModel; }>()
);

export const deleteStudent = createAction(
  '[Student] Delete Student',
  props<{ studentId: number; }>()
);
