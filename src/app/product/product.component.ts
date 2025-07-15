import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products$: Observable<Product[]>;

  constructor(private cart: ProductCartService, private productDataService: ProductDataService) {
    this.products$ = this.productDataService.getAll();
  }

  AddToCart(product: Product): void  {
    this.cart.AddToCart(product);
  }
}
