import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatDialog} from '@angular/material/dialog';
import { LoginPopupComponent } from '../../app/login-popup/login-popup.component';

@Component({
  selector: 'app-header',
  imports: [MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  readonly dialog = inject(MatDialog);

  openLoginPopup(){
    const dialogRef = this.dialog.open(LoginPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

}
