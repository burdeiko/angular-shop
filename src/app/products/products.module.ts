import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ProductComponent, 
    ProductService
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent]
})
export class ProductsModule { }
