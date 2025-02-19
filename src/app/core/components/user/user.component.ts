import { Component, inject } from "@angular/core";
import { User } from "../../../shared/models/user.model";
import { StarPipe } from "../../../shared/pipes/star.pipe";
import { UpperCasePipe, AsyncPipe } from "@angular/common";
import { Store } from "@ngxs/store";
import { UserState } from "../../../store/user/user.state";
import { Observable } from "rxjs";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    imports: [UpperCasePipe ,StarPipe, AsyncPipe]
})
export class UserComponent {
    private readonly store = inject(Store)
    user$: Observable<User> = this.store.select(UserState.getCurrentUser)
}