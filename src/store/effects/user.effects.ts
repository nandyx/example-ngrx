import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { UserService } from 'src/services/user.service';
import * as fromActions from '../actions/user.actions';



@Injectable()
export class UserEffects {

  load$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.UserActions.Load),
    switchMap(() => this.service.getAllUsers().pipe(
      map((payload: any) => fromActions.loadUsersSuccess({ payload })),
      catchError((err: any) =>
        of(fromActions.loadUsersFailure({ error: err })))
    ))
  ));

  constructor(private actions$: Actions, private service: UserService) { }
}
