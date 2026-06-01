import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class Checkbox {
  checked = input<boolean>(false);
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }
}
