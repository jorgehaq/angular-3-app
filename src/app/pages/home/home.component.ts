import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGTH: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  
  cols = 3;
  rowsHeight = ROWS_HEIGTH[this.cols];
  category: string | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowsHeight = ROWS_HEIGTH[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

}
