import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Producto } from '../../../models/producto.interface';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  private productoService = inject(ProductoService);

  productos: Producto[] = [];

  constructor() {
    this.productos = this.productoService.getProductos();
  }

}