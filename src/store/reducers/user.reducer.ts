import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Dictionary } from '@ngrx/entity';

import { User } from 'src/models/user';
import * as fromActions from '../actions/user.actions';


export const userFeatureKey = 'user';

export interface State extends EntityState<User> {
  isLoading: boolean;
  loaded: boolean;
  error: string;
}
export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  isLoading: false,
  loaded: false,
  error: ''
});

export const reducer = createReducer(
  initialState,
  on(fromActions.loadUsers, (state) => ({
    ...state,
    isLoading: true
  })),
  on(fromActions.loadUsersSuccess, (state, action) => {

    return adapter.addMany(action.payload, { ...state, isLoading: false, loaded: true });
  }),
  on(fromActions.loadUsersFailure, (state, action) => ({
    ...state,
    isLoading: false,
    loaded: true,
    error: action.error
  })),
  on(fromActions.deleteUser, (state, action) => {

    // return adapter.removeOne(action.payload.id, state);
    return adapter.removeAll({...state});
  }),

);

export function userReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
export const getLoading = (state: State) => state.isLoading;
export const getLoaded = (state: State) => state.loaded;

// get the selectors
const {
  selectAll
} = adapter.getSelectors();

// select the array of users
export const selectAllUsers = selectAll;

