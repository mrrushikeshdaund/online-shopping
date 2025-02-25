import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-catagory',
  imports: [MatCardModule],
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.scss'
})
export class CatagoryComponent {
  
  products: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
    console.log(this.products)
  }

  fetchProducts() {
    this.http.get<any>('https://dummyjson.com/products').subscribe({
      next: (data) => (this.products = data.products),
      error: (err) => console.error('Error fetching products:', err),
    });
  }


}
