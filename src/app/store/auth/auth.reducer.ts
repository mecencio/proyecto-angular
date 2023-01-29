import { User } from 'src/app/core/models/user.model';
import { createReducer, on } from "@ngrx/store";
import { login, logout } from './auth.actions';

export interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user: null,
}

export const authReducer = createReducer(
    initialState,
    on(login, (oldUser, payload) => {
        return {
            ...oldUser,
            user: payload.user

        }
    }),
    on(logout, () => {
        localStorage.removeItem('user');
        return initialState;
    })
);