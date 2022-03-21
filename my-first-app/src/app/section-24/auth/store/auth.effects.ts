import { AuthResponseData } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, of } from 'rxjs';

import * as AuthActions from './auth.actions';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http
        .post<AuthResponseData>(
          `${environment.FIREBASE_AUTH_URL}:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true,
          }
        )
        .pipe(
          map((resData) => {
            const expirationDate = new Date(
              new Date().getTime() + +resData.expiresIn * 1000
            );
            return of(
              new AuthActions.Login({
                email: resData.email,
                userId: resData.localId,
                token: resData.idToken,
                expirationDate: expirationDate,
              })
            );
          }),
          catchError((error) => {
            // ...
            return of();
          })
        );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
