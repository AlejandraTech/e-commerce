import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  addToCart(product: any): void {
    let cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    let found = false;
    cartItems.forEach((item: any) => {
      if (item.product && product && item.product.id === product.id) {
        item.quantity++;
        found = true;
      }
    });
    if (!found) {
      const newItem = { product: product, quantity: 1 };
      cartItems.push(newItem);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  getCartItems(): any[] {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  removeFromCart(item: any): void {
    let cartItems: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const updatedCartItems = cartItems.filter((cartItem: any) => cartItem.product.id !== item.product.id);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }
}
