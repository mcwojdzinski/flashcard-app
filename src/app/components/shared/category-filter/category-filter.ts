import { Component, HostListener, signal } from '@angular/core';
import { Checkbox } from "../checkbox/checkbox";
import { CategoriesDropdown } from "./categories-dropdown/categories-dropdown";

@Component({
  selector: 'app-category-filter',
  imports: [Checkbox, CategoriesDropdown],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
})
export class CategoryFilter {

  isOpen = signal<boolean>(false);

  toggle() {
    this.isOpen.update(v => !v);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown-wrapper')) {
        this.isOpen.set(false)
      }
  }
}
