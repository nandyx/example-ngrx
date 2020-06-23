import { createAction, props } from '@ngrx/store';
import { User } from 'src/models/user';

export enum UserActions {
  Load = '[User] Load Users',
  LoadSuccess = '[User] Load Users Success',
  LoadFailure = '[User] Load Users Failure',
  Delete = '[User] Delete User',
}

export const loadUsers = createAction(
  UserActions.Load
);

export const loadUsersSuccess = createAction(
  UserActions.LoadSuccess,
  props<{ payload: User[] }>()
);

export const loadUsersFailure = createAction(
  UserActions.LoadFailure,
  props<{ error: any }>()
);
export const deleteUser = createAction(
  UserActions.Delete,
  props<{ payload: User }>()
);
