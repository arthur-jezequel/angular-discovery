import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  //templateUrl: './app.component.html',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/user">Profile</a>
      <a routerLink="/form">Change user</a>
    </nav>
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
