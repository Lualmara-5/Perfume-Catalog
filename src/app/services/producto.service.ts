import { Injectable } from '@angular/core';

import { Producto } from '../models/producto.interface';
import { PRODUCTOS } from '../data/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  getProductos(): Producto[] {
    return PRODUCTOS;
  }

}