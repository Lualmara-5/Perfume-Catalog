import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CurrencyFormatter } from '../utils/currency-formatter';

@Directive({
  selector: '[currencyInput]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CurrencyInputDirective),
      multi: true
    }
  ]
})

export class CurrencyInputDirective implements ControlValueAccessor {

  private value = 0;

  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(
    private element: ElementRef<HTMLInputElement>
  ) {}

  writeValue(value: number): void {
    this.value = value ?? 0;
    this.element.nativeElement.value =
      this.value ? CurrencyFormatter.format(this.value) : '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.element.nativeElement.disabled = disabled;
  }

  @HostListener('focus')
  onFocus(): void {
    if (this.value > 0) {
      this.element.nativeElement.value = this.value.toString();
    }
  }

  @HostListener('input')
  onInput(): void {
    const input = this.element.nativeElement;
    // Solo números
    const limpio = input.value.replace(/\D/g, '');
    input.value = limpio;
    this.value = limpio ? Number(limpio) : 0;
    this.onChange(this.value);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
    this.element.nativeElement.value =
      this.value ? CurrencyFormatter.format(this.value) : '';
  }

  @HostListener('keydown.enter')
  onEnter(): void {
    this.element.nativeElement.blur();
  }
}
