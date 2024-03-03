import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: any = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    if (this.userService.login(this.credentials)) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid username or password');
    }
  }
}
