import { Injectable } from '@angular/core';
import { Product } from './product/Product';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Product[] = [];

  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]); 
 
  constructor() { }

  AddToCart(product: Product) {
    let productInCart = this._cartList.find((v1) => v1.name == product.name);

    if(!productInCart) {
      this._cartList.push({ ... product})
    } else if((productInCart.quantity + product.quantity) <= product.stock) {//El stock del producto limita las unidades que se pueden agregar al carro de compras
      productInCart.quantity += product.quantity;                            
    } else {
      alert('Stock superado');
    }
    this.cartList.next(this._cartList);
  }
}
