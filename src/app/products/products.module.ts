import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './components';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent]
})
export class ProductsModule { }
