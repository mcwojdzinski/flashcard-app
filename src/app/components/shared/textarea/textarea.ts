import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

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
}
