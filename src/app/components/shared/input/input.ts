import { Component, input } from '@angular/core';
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
  errorStatus = input<boolean>(true);
}
