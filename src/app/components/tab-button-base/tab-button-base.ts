import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tab-button-base',
  imports: [NgClass],
  templateUrl: './tab-button-base.html',
  styleUrl: './tab-button-base.css',
})
export class TabButtonBase {
  text = input<string>();
  isCurrent = input<boolean>();
}
