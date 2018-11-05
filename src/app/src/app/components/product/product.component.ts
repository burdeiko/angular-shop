import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string
  description: string
  price: number
  category: Category
  isAvailable: boolean

  constructor() { }

  ngOnInit() {
    this.name = 'testName';
    this.description = 'testDesc';
    this.category = Category.Laptop;
    this.price = 1500;
    this.isAvailable = true;
  }

}

enum Category {
  Laptop,
  Tablet,
  Phone
}