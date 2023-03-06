import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

import mockProducts from './mock-products.json';
const PRODUCTS = mockProducts as Product[];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS)
  }
}
