import { Component } from '@angular/core';
import { ProductCartService } from '../services/product-cart.service';
import { Product } from '../product/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$: Observable<Product[]>;

  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
}
