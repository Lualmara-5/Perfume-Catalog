import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyFormatter } from '../utils/currency-formatter';

@Pipe({
  name: 'currencyCop',
  standalone: true
})
export class CurrencyCopPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    return CurrencyFormatter.format(value);
  }

}