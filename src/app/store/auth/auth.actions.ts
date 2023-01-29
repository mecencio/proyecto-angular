import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/models/user.model";

export const login = createAction(
    '[AUTH] LOGIN',
    props<{user: User}>(),
)

export const logout = createAction(
    '[AUTH] LOGOUT',
)