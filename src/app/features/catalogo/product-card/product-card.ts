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

}