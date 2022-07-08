import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product (1, 'Apple iPhone 28 12 1GB', 45000, 'assets/Images/igraph.png'),
    new Product (2, 'Men White Fit Sweatshirt', 2000, 'assets/Images/hm.jpg'),
    new Product (3, 'Apple watch', 15000, 'assets/Images/aplwch.png'),
    new Product (4, 'Apple iPhone 28 12 1GB', 45000),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

}
