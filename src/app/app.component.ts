import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  constructor(private userService: UserService) {}

  isLoggedIn(): boolean {
    return this.userService.isUserLoggedIn();
  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  logout(): void {
    this.userService.logout();
  }
}
