import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';

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
      price: 300000,
      stock: 3,
      quantity: 1,
    },
    {
      image: "/assets/img/Ryzen3.jpg",
      name: "AMD Ryzen3 3200g",
      price: 90000,
      stock: 5,
      quantity: 1,
    },
    {
      image: "/assets/img/asrock.png",
      name: "Asrock Challenger CL27FF",
      price: 160000,
      stock: 1,
      quantity: 1,
    },
  ]

  constructor(private cart: ProductCartService){ }

  AddToCart(product: Product): void  {
    this.cart.AddToCart(product);
  }
}
