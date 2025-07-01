import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product/Product';

const URL = 'https://667477c175872d0e0a968df8.mockapi.io/api/Tienda-Gamer-Stock';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL).
                        pipe(
                          tap((products: Product[]) => products.forEach(product => product.quantity = 1))
                        );
  }
}
