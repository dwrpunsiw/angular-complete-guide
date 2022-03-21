import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
}

const initialState: State = {
  user: null,
};

export function authReducer(
  state: State = initialState,
  action: AuthActions.Actions
) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const loginAction = <AuthActions.Login>action;
      const user = new User(
        loginAction.payload.email,
        loginAction.payload.userId,
        loginAction.payload.token,
        loginAction.payload.expirationDate
      );
      return {
        ...state,
        user: user,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
