import { Component, input } from '@angular/core';
import { Producto } from '../../../models/producto.interface';
import { CurrencyCopPipe } from '../../../shared/pipes/currency-cop.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyCopPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  producto = input.required<Producto>();
  
  nombreProducto(): string {
    const producto = this.producto();

    if (!producto.categorias.includes('Combo')) {
      return producto.nombre;
    }

    const nombres = producto.nombre.split(' • ');

    if (nombres.length <= 2) {
      return producto.nombre;
    }

    return `${nombres.slice(0, 2).join(' • ')} +${nombres.length - 2}`;
  }
}