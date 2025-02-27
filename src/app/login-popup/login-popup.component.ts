import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { SignupPopupComponent } from '../signup-popup/signup-popup.component';

@Component({
  selector: 'app-login-popup',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.scss',
})
export class LoginPopupComponent {
  emailTxt: string = '';
  passwordTxt: string = '';

  readonly dialog = inject(MatDialog);

  constructor(private authService: AuthService) {}

  handleLoginAction() {
    const success = this.authService.login(this.emailTxt, this.passwordTxt);
    if (!success) {
      alert('Invalid username or password');
    } else {
      alert('sucessfully');
    }
    console.log(this.emailTxt);
    console.log(this.passwordTxt);
  }

  handleSignupPopup() {
    const dialogRef = this.dialog.open(SignupPopupComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
