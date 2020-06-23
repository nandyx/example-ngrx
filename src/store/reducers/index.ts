import * as fromUser from './user.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    user: fromUser.State;
}

export const reducers: ActionReducerMap<AppState> = {
    user: fromUser.reducer
};


