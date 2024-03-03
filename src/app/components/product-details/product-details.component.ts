import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  searchTerm: string = '';
  products: any[];
  filteredProducts: any[];
  selectedProduct: any;
  newProduct: any = {}; // Nuevo producto a agregar
  showAddForm: boolean = false;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  search(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  editProduct(product: any): void {
    // Asigna el producto seleccionado para editar
    this.selectedProduct = { ...product };
  }

  deleteProduct(product: any): void {
    const index = this.products.findIndex(p => p === product); // Encuentra el índice del producto en el array de productos
    if (index !== -1) {
      this.products.splice(index, 1); // Elimina el producto del array
      this.filteredProducts = this.products.slice(); // Actualiza filteredProducts para reflejar el cambio
    }
  }

  addProduct(): void {
    // Mostrar el formulario de añadir producto
    this.showAddForm = true;
  }

  onSubmit(): void {
    // Agregar el nuevo producto al array de productos
    this.products.push(this.newProduct);
    // También puedes actualizar filteredProducts si es necesario
    console.log('Product added:', this.newProduct);
    // Limpiar el objeto de nuevo producto después de la adición
    this.newProduct = {};
    // Ocultar el formulario después de añadir el producto
    this.showAddForm = false;
  }

  updateProduct(updatedProduct: any): void {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      // También puedes actualizar filteredProducts si es necesario
      console.log('Product updated:', updatedProduct);
      this.selectedProduct = null; // Limpiar el producto seleccionado después de la actualización
    }
  }
}
