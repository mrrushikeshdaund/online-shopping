import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SiderComponent } from "../../components/sider/sider.component";
import { ProductcatlogComponent } from "../../components/productcatlog/productcatlog.component";

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, SiderComponent, ProductcatlogComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {


}
