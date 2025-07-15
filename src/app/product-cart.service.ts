import { Injectable } from '@angular/core';
import { Product } from './product/Product';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Product[] = [];
  private _cartLength: number = 0;

  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  cartLength: BehaviorSubject<number> = new BehaviorSubject<number>(0); //Se encarga de mantener actualizado, icono del carrito, en la nav-bar
 
  constructor() { }

  AddToCart(product: Product) {
    let productInCart = this._cartList.find((v1) => v1.name == product.name);

    if((!productInCart)) {
      this._cartList.push({ ... product})
      this._cartLength = this.GetCartLength(this._cartLength, this._cartList); 
    } else if((productInCart.quantity + product.quantity) <= product.stock) {//El stock del producto limita las unidades que se pueden agregar al carro de compras
      productInCart.quantity += product.quantity;
      this._cartLength = this.GetCartLength(this._cartLength, this._cartList);                         
    } else {
      alert('Stock superado');
    }

    this.cartLength.next(this._cartLength);
    this.cartList.next(this._cartList);
  }

  GetCartLength(cartLength: number, cartList: Product[]): number {
    cartLength = 0;
    cartList.forEach(element => {
      cartLength += element.quantity;
    });
    return cartLength;
  }
}
