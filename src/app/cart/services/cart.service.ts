import { Injectable } from '@angular/core';
import { IProduct } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<IProduct> = []

  addProductToCart(product: IProduct) {
    this.cart.push(product);
  }

  getProductsInCart(): Array<IProduct> {
    return this.cart;
  }

  constructor() { }
}
