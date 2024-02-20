
import { IModel } from '../model/object.model';
import * as UserActions from './user.action';
import { createReducer, on } from "@ngrx/store";





export const initialState: IModel[] = [];




export const userReducer = createReducer(
  initialState,
  on(UserActions.addStudent, (state, { student }) => {
    return [...state, student];
  }),
  on(UserActions.editStudent, (state, { updatedStudent }) => {
    const index = state.findIndex(student => student.id === updatedStudent.id);

    if (index !== -1) {
      const updatedState = [...state];
      updatedState[index] = {
        ...updatedState[index],
        name: updatedStudent.name,
        description: updatedStudent.description,
        vote: updatedStudent.vote,
        cfu: updatedStudent.cfu
      };

      return updatedState;
    } else {
      return state;
    }
  }),

  on(UserActions.deleteStudent, (state, { studentId }) => {
    return state.filter(student => student.id !== studentId);
  })
);

/**
 * on(UserActions.setTitle, (state, { post }) => ({
  ...state,
  post
})),
 */
