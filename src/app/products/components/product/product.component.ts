import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { CartService } from '../../../cart/services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;

  onBuy() {
    console.log('Buy ' + this.product.name);
    this.cartService.addProductToCart(this.product);
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}