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
  isDisabled =  input<boolean>(false)

  baseClasses =
  'flex flex-row gap-2 py-3 px-5 rounded-full border border-neutral-900 tp4-medium transition outline-none';

  disabledClasses =
  'opacity-50 hover:shadow-input! hover:cursor-not-allowed!';

  typeClasses() {
    switch (this.type()) {
      case 'primary':
        return 'bg-yellow-500 text-neutral-900 shadow-[2px_2px_0_0_var(--color-neutral-900)] hover:shadow-[4px_4px_0_0_var(--color-neutral-900)] hover:cursor-pointer focus:shadow-[3px_3px_0_0_var(--color-blue-600)]';

      case 'secondary':
        return 'bg-neutral-0 text-neutral-900 shadow-[2px_2px_0_0_var(--color-neutral-900)] hover:shadow-[4px_4px_0_0_var(--color-neutral-900)] hover:cursor-pointer focus:shadow-[3px_3px_0_0_var(--color-blue-600)]';

      default:
        return 'bg-neutral-0 text-neutral-900 hover:cursor-pointer hover:bg-neutral-100';
    }
  }

}
