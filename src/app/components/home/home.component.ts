import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  viewProducts(): void {
    if (this.userService.isUserLoggedIn()) {
      // Si el usuario ha iniciado sesión, puede navegar a /products
      this.router.navigate(['/products']);
    } else {
      // Si el usuario no ha iniciado sesión, se redirigirá a la página de /login
      this.router.navigate(['/login']);
    }
  }

}
