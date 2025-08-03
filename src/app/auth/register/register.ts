import { Component , inject} from '@angular/core';
import { AuthService} from '../service/auth-service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'USER'
  };

  constructor(private authService: AuthService, private  router: Router, private _snackBar: MatSnackBar) {}
  register() {
    this.authService.register(this.user).subscribe({
      next: res => {
        this._snackBar.open('Registration successful! Redirecting to login...', '', {
          duration: 3000,
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      error: err => {
        console.error(err);
        alert('Registration failed.');
      }
    });
  }
}
