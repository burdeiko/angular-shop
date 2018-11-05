import { Injectable, EventEmitter } from '@angular/core';
import { IProduct } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  CartUpdate: EventEmitter<any> = new EventEmitter<any>();

  private cart: Array<IProduct> = []

  addProductToCart(product: IProduct) {
    this.cart.push(product);
    this.CartUpdate.emit();
  }

  getProductsInCart(): Array<IProduct> {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.CartUpdate.emit();
  }

  constructor() { }
}
