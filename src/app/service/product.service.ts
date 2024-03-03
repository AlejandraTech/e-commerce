import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any[] = [
    { id: 1, name: 'Product 1', price: 10, stock: 5 },
    { id: 2, name: 'Product 2', price: 20, stock: 3 },
    { id: 3, name: 'Product 3', price: 30, stock: 7 },
    // Agrega más productos según sea necesario
  ];

  constructor(private cartService: CartService) { }

  getProducts(): any[] {
    return this.products;
  }

  getProductById(id: number): any {
    return this.products.find(product => product.id === id);
  }

  addToCart(productId: number): boolean {
    const productIndex = this.products.findIndex(product => product.id === productId);
    if (productIndex !== -1 && this.products[productIndex].stock > 0) {
      this.products[productIndex].stock--;
      this.cartService.addToCart(this.products[productIndex]); // Agregar al carrito
      return true;
    }
    return false; // No se pudo agregar al carrito debido a la falta de stock
  }
}
