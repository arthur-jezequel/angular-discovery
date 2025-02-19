import { of } from "rxjs";
import { User } from "../shared/models/user.model";
import { UserState } from "./user/user.state";

export class MockStore {
    select(selector: any) {
        if (selector === UserState.getCurrentUser) {
            return of(new User("Floppa", 22));
        }
        return of(null);
    }

    dispatch(action: any) {
        console.log(`Dispatching action: ${action.type}`)
    }
}