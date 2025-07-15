import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Observable} from 'rxjs';
import { Product } from '../product/Product';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  cartLength$: Observable<number>;
  
  constructor(private cart: ProductCartService) {
    this.cartLength$ = cart.cartLength.asObservable();
  }
}
