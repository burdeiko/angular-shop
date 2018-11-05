import { Injectable } from '@angular/core';
import { IProduct, Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Array<IProduct> {
    return [
      new Product('testName', 'testDesc', 1541, Category.Laptop, true),
      new Product('testName2', 'testDesc2', 143, Category.Phone, true),
      new Product('testName3', 'testDesc3', 5134, Category.Laptop, false),
    ];
  }

  constructor() { }
}
