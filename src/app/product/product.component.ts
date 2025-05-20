import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product_data = {
    "image":"/assets/img/Geforce.png",
    "name":"Gigabyte Geforce RTX 3060ti",
    "price":"$300.000"
  }
}
