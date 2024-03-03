import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
    this.initializeAdmin(); // Aseguramos que el usuario administrador siempre esté presente
  }

  initializeAdmin(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length === 0 || !this.adminExists(users)) {
      const adminUser = {
        username: 'admin',
        password: 'admin123',
        role: 'admin'
      };
      this.register(adminUser); // Registramos el usuario administrador
    }
  }

  adminExists(users: any[]): boolean {
    return users.some((user: any) => user.role === 'admin');
  }

  register(userData: any) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
  }

  updateUserRole(username: string, newRole: string): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((user: any) => user.username === username);
    if (userIndex !== -1) {
      users[userIndex].role = newRole;
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
    return false;
  }

  login(credentials: any): boolean {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((user: any) => user.username === credentials.username && user.password === credentials.password);
    if (foundUser) {
      sessionStorage.setItem('currentUser', JSON.stringify(foundUser));
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem('currentUser');
  }

  getCurrentUser(): any {
    const currentUser = sessionStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  isUserLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  getUserRole(): string {
    const currentUser = this.getCurrentUser();
    return currentUser ? currentUser.role : 'client'; // Default to 'client' role if no user or role found
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }
  getAllUsers(): any[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }
}
