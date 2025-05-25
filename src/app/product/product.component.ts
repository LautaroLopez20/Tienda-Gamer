import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products: Product[] = [
    {
      image:"/assets/img/Geforce.png",
      name:"Gigabyte Geforce RTX 3060ti",
      price: 300000
    },
    {
      image: "/assets/img/Ryzen3.jpg",
      name: "AMD Ryzen3 3200g",
      price: 90000,
    },
    {
      image: "/assets/img/asrock.png",
      name: "Asrock Challenger CL27FF",
      price: 160000,
    },
  ]
}
