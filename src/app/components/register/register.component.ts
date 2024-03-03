import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: any = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.userService.register(this.userData);
    this.router.navigate(['/login']);
  }
}
