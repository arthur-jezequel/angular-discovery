import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms"
import { Store } from "@ngxs/store";
import { GetUserAction } from "../../../store/user/user.action";
import { UserState } from "../../../store/user/user.state";
import { Observable } from "rxjs";
import { User } from "../../../shared/models/user.model";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'app-userform',
    template: `
        <p id="current_user">Current User : {{ ( currentUser$ | async )?.username }} </p>
        <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
            <label for="id">
                ID :
                <input formControlName="id" type="number" id="id_input" />
            </label>
            <button type="submit" id="submit_button">Submit</button>
        </form>
    `,
    styleUrls: ["./userform.component.css"],
    imports: [ReactiveFormsModule, AsyncPipe],
})
export class UserFormComponent {
    private readonly store: Store = inject(Store)
    currentUser$: Observable<User> = this.store.select(UserState.getCurrentUser);

    profileForm = new FormGroup({
        id: new FormControl(),
      });

    handleSubmit() {
        console.log(`fetching user of Id ${this.profileForm.value.id}`)
        this.store.dispatch(new GetUserAction(this.profileForm.value.id?? -1))
    }
}