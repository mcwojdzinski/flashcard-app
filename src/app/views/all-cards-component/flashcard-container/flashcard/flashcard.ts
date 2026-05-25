import { Component, HostListener, inject, signal } from '@angular/core';
import { Tag } from "../../../../components/shared/tag/tag";
import { ProgressBar } from "../../../../components/shared/progress-bar/progress-bar";
import { DialogService } from '../../../../services/dialog.service';

@Component({
  selector: 'app-flashcard',
  imports: [Tag, ProgressBar],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.css',
})
export class Flashcard {
  private dialogService = inject(DialogService);
  isOpen = signal<boolean>(false);

  // Mock data - replace with actual data from parent
  cardData = {
    id: '1',
    question: 'What does HTML stand for?',
    answer: 'HyperText Markup Language',
    category: 'Web Development'
  };

  toggle() {
    this.isOpen.update(v => !v);
  }

  openEdit() {
    this.dialogService.openEdit(this.cardData);
    this.isOpen.set(false);
  }

  openDelete() {
    this.dialogService.openDelete(this.cardData);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown-wrapper')) {
        this.isOpen.set(false)
      }
  }
}
