import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyInputDirective } from '../../../shared/directives/currency-input.directive';
import { Filtros } from '../../../models/filtros.interface';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyInputDirective],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class Filters {

  readonly PRECIO_MIN = 75000;
  readonly PRECIO_MAX = 500000;

  precioMinError = false;
  precioMaxError = false;
  precioRangoError = false;

  mostrarFiltros = false;

  @Output() filtrosChange = new EventEmitter<Filtros>();

  filtros: Filtros = this.crearFiltrosIniciales();

  private crearFiltrosIniciales(): Filtros {
    return {
      categorias: [],
      marcas: [],
      precio: {
        minimo: this.PRECIO_MIN,
        maximo: this.PRECIO_MAX
      }
    };
  }

  /* Saber si agregamos o quitamos filtros */
  toggleCategoria(categoria: string): void {

    const categorias = this.filtros.categorias.includes(categoria)
      ? this.filtros.categorias.filter(c => c !== categoria)
      : [...this.filtros.categorias, categoria];

    this.filtros = {
      ...this.filtros,
      categorias
    };

    this.emitirFiltros();
  }

  toggleMarca(marca: string): void {

    const marcas = this.filtros.marcas.includes(marca)
      ? this.filtros.marcas.filter(m => m !== marca)
      : [...this.filtros.marcas, marca];

    this.filtros = {
      ...this.filtros,
      marcas
    };

    this.emitirFiltros();
  }

  /* Emitir filtros */
  emitirFiltros(): void {
    this.filtrosChange.emit(this.filtros);
  }

  toggleFiltros(): void {
    if (window.innerWidth <= 768) {
      this.mostrarFiltros = !this.mostrarFiltros;
    }
  }

  esMovil(): boolean {
    return window.innerWidth <= 768;
  }

  quitarFoco(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.blur();
  }

  validarPrecio(tipo: 'minimo' | 'maximo'): void {

    if (tipo === 'minimo') {

      // Menor al mínimo permitido
      if (this.filtros.precio.minimo < this.PRECIO_MIN) {

        this.precioMinError = true;
        this.filtros.precio.minimo = this.PRECIO_MIN;

        setTimeout(() => {
          this.precioMinError = false;
        }, 2000);
      }

      // El mínimo es mayor que el máximo
      else if (this.filtros.precio.minimo > this.filtros.precio.maximo) {

        this.precioRangoError = true;

        setTimeout(() => {
          this.precioRangoError = false;
        }, 2000);

        return;
      }
    }

    if (tipo === 'maximo') {

      // Mayor al máximo permitido
      if (this.filtros.precio.maximo > this.PRECIO_MAX) {

        this.precioMaxError = true;
        this.filtros.precio.maximo = this.PRECIO_MAX;

        setTimeout(() => {
          this.precioMaxError = false;
        }, 2000);
      }

      // El máximo es menor que el mínimo
      else if (this.filtros.precio.maximo < this.filtros.precio.minimo) {

        this.precioRangoError = true;

        setTimeout(() => {
          this.precioRangoError = false;
        }, 2000);

        return;
      }
    }

    // Crear nuevas referencias para detectar el cambio
    this.filtros = {
      ...this.filtros,
      precio: {
        ...this.filtros.precio
      }
    };

    this.emitirFiltros();
  }

  limpiarFiltros(): void {

    this.precioMinError = false;
    this.precioMaxError = false;
    this.precioRangoError = false;

    this.filtros = this.crearFiltrosIniciales();

    this.emitirFiltros();
  }
}