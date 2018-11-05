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

  onCartUpdate() {
    this.cart = this.cartService.getProductsInCart();
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getProductsInCart();
  }

}
