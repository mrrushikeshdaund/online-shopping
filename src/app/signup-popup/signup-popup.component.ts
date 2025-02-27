import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-popup',
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './signup-popup.component.html',
  styleUrl: './signup-popup.component.scss',
})
export class SignupPopupComponent {
  nametxt: string = '';
  emailtxt: string = '';
  passwordtxt: string = '';

  handleSignUpAction() {
    console.log(this.nametxt);
    console.log(this.emailtxt);
    console.log(this.passwordtxt);
  }
}
