import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  selectedUser: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.userService.getAllUsers();
  }

  openUpdateForm(user: any): void {
    this.selectedUser = user;
  }

  updateUserRole(user: any): void {
    // Lógica para actualizar el rol del usuario
    if (this.userService.updateUserRole(user.username, user.role)) {
      console.log(`Role updated successfully for user: ${user.username}`);
    } else {
      console.log(`Failed to update role for user: ${user.username}`);
    }
    // Limpiar la selección después de actualizar el rol
    this.selectedUser = null;
  }
}
