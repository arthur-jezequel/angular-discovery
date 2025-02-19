import { Action, State, StateContext, Selector } from "@ngxs/store"
import { User } from "../../shared/models/user.model"
import { inject, Injectable } from "@angular/core"
import { UserService } from "../../shared/services/user.service"
import { GetUserAction } from "./user.action"

export type UserStateModel = {
    user: User,
    loading: boolean,
}

@State({
    name: "user",
    defaults: {
        user: new User("Dummy", 0),
        loading: true,
    }
})
@Injectable()
export class UserState {
    private readonly userService: UserService = inject(UserService);

    @Action(GetUserAction)
    getUserById(context: StateContext<UserStateModel>, action: GetUserAction) {
        let user: User | undefined = this.userService.getUserById(action.id);
        if (!user) {
            console.error(`User of ID ${action.id} could not be retreived.`)
            alert(`User of ID ${action.id} could not be retreived.`)
        };
        context.patchState({
            user: user,
            loading: false
        })
    }

    @Selector()
    static getCurrentUser(state: UserStateModel): User {
        return state.user;
    }
}