import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services'
import { IProduct } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<IProduct>

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getProductsInCart();
    this.cartService.CartUpdate.subscribe(this.onCartUpdate.bind(this));
  }

  onClear() {
    this.cartService.clearCart();
  }

  private onCartUpdate() {
    this.cart = this.cartService.getProductsInCart();
    console.log('test');
  }
}
