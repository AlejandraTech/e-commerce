import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private router: Router, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.loadCartItems();
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartItems.forEach((item) => {
      totalPrice += (item.product.price * item.quantity);
    });
    return totalPrice;
  }
}
