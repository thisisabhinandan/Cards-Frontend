import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {LoginDTO, ResponseDTO} from "../../model/card";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials : LoginDTO={
    cardNumber: '',
    mobileNumber: ''
  };
  message: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if(!this.credentials.mobileNumber || !this.credentials.cardNumber) {
      this.message = 'Please enter a mobile number and card number';
      return;
    }
    this.authService.login(this.credentials).subscribe({
      next: (res: ResponseDTO) => {
        if(res.statusCode === '200' && res.token) {
          this.authService.saveToken(res.token);
          this.router.navigate(['/fetch-card']);
        } else {
          this.message=res.statusMsg;
        }
      },
      error: () => this.message='Failed to login'
    });
  }
}
