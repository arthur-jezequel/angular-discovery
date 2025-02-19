import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root',
})
export class UserService {

    users = new Map<number, User>([
        [1, new User("Floppa", 25)],
        [2, new User("Sonic", 18)],
        [3, new User("Shadow", 68)],
    ])

    getUser(): User | undefined {
        let user: User | undefined = this.users.get(1)
        if (!user) return undefined ;
        return user;
    }

    getUserById(id: number): User | undefined {
        let user: User | undefined = this.users.get(id)
        if (!user) return undefined ;
        return user;
    }
}