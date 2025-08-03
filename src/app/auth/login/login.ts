import {Component, Injectable} from '@angular/core';
import { AuthService} from '../service/auth-service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
@Injectable({
  providedIn: 'root'
})
export class Login {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe({
      next: res => {
        this.authService.saveToken(res.token);
        alert('Login successful!');
        this.router.navigate(['/employees']);
      },
      error: err => {
        console.error(err);
        alert('Login failed.');
      }
    });
  }
}
