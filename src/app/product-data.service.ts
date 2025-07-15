import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product/Product';

const URL = 'https://667477c175872d0e0a968df8.mockapi.io/api/Tienda-Gamer-Stock';
const OFFER = '?offer=true';
const MAX = 35;
const MIN = 8;

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(URL).
                        pipe(
                          tap((products: Product[]) => 
                            products.forEach(product => 
                              (product.quantity = 1) && 
                              (product.discount = Math.floor(Math.random() * MAX) + MIN)))
                        );
  }
}
