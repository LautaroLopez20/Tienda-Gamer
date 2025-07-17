import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCartService } from '../services/product-cart.service';
import { Product } from '../product/Product';

@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})

export class InputNumberComponent {
  @Input() quantity!: number;
  @Input() max!: number;
  @Input() name!: String;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private cart: ProductCartService) { }

  upQuantity(): void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    this.cart.GetCartLength();
  }

  downQuantity(): void {
    if(this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }else { //Si la cantidad baja de 1, el producto se elimina del carro de compras
      this.cart.DeleteProduct(this.name);
    }
    this.cart.GetCartLength();
  }
}
