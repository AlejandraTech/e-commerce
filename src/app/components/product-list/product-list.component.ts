import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(productId: number): void {
    const addedToCart = this.productService.addToCart(productId);
    if (addedToCart) {
      console.log('Product added to cart successfully.');
    } else {
      console.log('Failed to add product to cart due to insufficient stock.');
    }
  }
}
