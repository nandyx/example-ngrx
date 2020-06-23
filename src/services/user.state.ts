import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReducer from 'src/store/reducers/user.reducer';
import * as fromActions from 'src/store/actions/user.actions';
import * as fromSelectors from 'src/store/selectors/user.selectors';
import { User } from 'src/models/user';

@Injectable()
export class UserState {

    constructor(private store: Store<fromReducer.State>) { }

    getAllUsers() {
        this.store.dispatch(fromActions.loadUsers());
    }
    delete(user: User) {
        this.store.dispatch(fromActions.deleteUser({ payload: user }));
    }
    get Loading$() {
        return this.store.select(fromSelectors.getIsLoading);
    }
    get loaded$() {
        return this.store.select(fromSelectors.getLoaded);
    }
    get users$() {
        return this.store.select(fromSelectors.getUsers);
    }
}
