import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { UserFormComponent } from './userform.component';
import { MockStore } from '../../../store/mockstore';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { By } from '@angular/platform-browser';

describe("UserForm Component", () => {

    let component: UserFormComponent;
    let fixture: ComponentFixture<UserFormComponent>;
    let store: Store;

    // Configurer le module de Test
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[ReactiveFormsModule, UserFormComponent],
            providers: [ // Remplacer des services tiers par des mocks
                {provide: Store, useClass: MockStore}
            ]
        });

        fixture = TestBed.createComponent(UserFormComponent); // Environement isolé qui contient le composant
        component = fixture.componentInstance; // Composant en question
        store = TestBed.inject(Store);
        fixture.detectChanges(); // Assurer que le composant est bien mis à jour avant de vérifier des assertions
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();  // Vérifie que le composant a bien été créé
    });

    it("should update the form's value when the input is udpated", fakeAsync(() => {
        const userId: number = 1;
        setInputValue("#id_input", userId);
        expect(component.profileForm.value.id).withContext("The id value of the form is set").toBe(userId)
    }));

    it('should dispatch an action when the submit button is pressed.', fakeAsync(() => {
        spyOn(component, "handleSubmit").and.callThrough();
        spyOn(store, "dispatch")
        const userId: number = 1;
        setInputValue("#id_input", userId);
        // Submit
        let button = fixture.debugElement.nativeElement.querySelector("#submit_button");
        button.click()
        tick()
        expect(component.handleSubmit).withContext("The submit method is called one time").toHaveBeenCalledTimes(1);
        expect(store.dispatch).withContext("The store dispatch method is called one time").toHaveBeenCalledTimes(1);
    }));

    /**
     * Simulate a user changing the input's value in the form
     * @param selector Input ID
     * @param value Value to put
     */
    function setInputValue(selector: string, value: any) {
        fixture.detectChanges();
        let input = fixture.debugElement.query(By.css(selector)).nativeElement;
        input.value = value;
        input.dispatchEvent(new Event('input'));
      }
})