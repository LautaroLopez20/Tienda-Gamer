import { Injectable } from '@angular/core';
import { Product } from '../product/Product';
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
    } else if((productInCart.quantity + product.quantity) <= product.stock) {//El stock del producto limita las unidades que se pueden agregar al carro de compras
      productInCart.quantity += product.quantity;        
    } else {
      alert('Stock superado');
    }

    this.GetCartLength()
    this.cartList.next(this._cartList);
  }

  GetCartLength() {
    this._cartLength = 0;
    this._cartList.forEach(element => {
      this._cartLength += element.quantity;
    });
    this.cartLength.next(this._cartLength);
  }

  DeleteProduct(name: String) {
    let product = this._cartList.filter(p => p.name == name)[0];
    this._cartList.splice(this._cartList.indexOf(product),1);
    this.GetCartLength()
  }
}
