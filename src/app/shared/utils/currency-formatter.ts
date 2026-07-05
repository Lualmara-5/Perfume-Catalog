export class CurrencyFormatter {

  /* Convierte un número a moneda en string. 75000 -> $ 75.000 */
  static format(value: number | null | undefined): string {

    if (value === null || value === undefined) {
      return '';
    }

    return `$ ${value.toLocaleString('es-CO')}`;
  }

  /*Convierte un texto a número "$ 75.000" -> 75000 */
  static parse(value: string): number {

    const limpio = value.replace(/\D/g, '');

    return limpio ? Number(limpio) : 0;

  }

}