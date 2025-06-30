import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  emptyCart$: Observable<Boolean>;

  constructor(private cart: ProductCartService,) {
    this.emptyCart$ = cart.cartEmpty.asObservable();
  }
}
