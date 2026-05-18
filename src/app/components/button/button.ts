import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})

export class Button {
  type = input<'primary' | 'secondary' | 'border'>()
  icon = input<string>()
  iconSecond = input<string>()
  text = input<string>()
  isDisabled =  input<boolean>(true)
}
