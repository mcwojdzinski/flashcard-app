import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  imports: [NgClass],
  templateUrl: './textarea.html',
  styleUrl: './textarea.css',
})
export class Textarea {
  labelTitle = input<string>();
  placeholder = input<string>();
  errorLabel = input<string>();
  errorStatus = input<boolean>(true);
  value = input<string>('');
  valueChange = output<string>();

  onTextareaChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.valueChange.emit(target.value);
  }
}
