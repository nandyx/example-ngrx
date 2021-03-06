import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/user.reducer';

export const getUserState = createFeatureSelector<fromReducer.State>(fromReducer.userFeatureKey);

export const getUserPageState = createSelector(
    getUserState,
    state => state
);
export const getIsLoading = createSelector(
    getUserPageState,
    fromReducer.getLoading
);
export const getLoaded = createSelector(
    getUserPageState,
    fromReducer.getLoaded
);
export const getUsers = createSelector(
    getUserPageState,
    fromReducer.selectAllUsers
);
const selectUserEntities = createSelector(
    getUserPageState,
    fromReducer.selectUserEntities
  );
const selectCurrentUserId = createSelector(
    getUserPageState,
    fromReducer.getSelectedUserId
);
export const selectCurrentUser = createSelector(
    selectUserEntities,
    selectCurrentUserId,
    (userEntities, userId) => userEntities[userId]
);