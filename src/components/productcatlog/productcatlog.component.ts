import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-productcatlog',
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './productcatlog.component.html',
  styleUrl: './productcatlog.component.scss',
})
export class ProductcatlogComponent {}
