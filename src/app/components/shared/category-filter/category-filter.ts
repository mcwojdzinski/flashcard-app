import { Component, HostListener, computed, signal, input, Output, EventEmitter } from '@angular/core';
import { Checkbox } from "../checkbox/checkbox";
import { Flashcard } from '../../../services/flashcard.service';

@Component({
  selector: 'app-category-filter',
  imports: [Checkbox],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
})
export class CategoryFilter {
  flashcards = input<Flashcard[]>([]);
  categories = input<string[]>([]);
  selectedCategory = input<string>('');
  @Output() categoryChange = new EventEmitter<string>();
  isOpen = signal<boolean>(false);

  categoryStats = computed(() => {
    const counts = new Map<string, number>();

    this.flashcards().forEach(card => {
      const category = card.category?.trim();
      if (!category) return;
      counts.set(category, (counts.get(category) ?? 0) + 1);
    });

    return this.categories().map(category => ({
      category,
      count: counts.get(category) ?? 0,
    }));
  });

  totalCount = computed(() => this.flashcards().length);

  toggle() {
    this.isOpen.update(v => !v);
  }

  selectCategory(category: string) {
    this.categoryChange.emit(category);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown-wrapper')) {
      this.isOpen.set(false)
    }
  }
}
