import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [NgClass],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  labelTitle = input<string>();
  placeholder = input<string>();
  errorLabel = input<string>();
  errorStatus = input<boolean>(false);
  value = input<string>('');
  valueChange = output<string>();
  type = input<'text' | 'password' | 'email' | 'number' | 'search' | 'tel'>('text');

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
