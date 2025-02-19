import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { UserComponent } from './core/components/user/user.component';
import { UserFormComponent } from './core/components/userform/userform.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'user',
        title: 'Profile',
        component: UserComponent
    },
    {
        path: 'form',
        title: 'Connect',
        component: UserFormComponent
    }
];
