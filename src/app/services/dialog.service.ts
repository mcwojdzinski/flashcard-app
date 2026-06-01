import { Injectable, inject, signal } from '@angular/core';
import { ToastService } from './toast.service';
import { FlashcardService } from './flashcard.service';

export type DialogMode = 'edit' | 'delete' | null;

export interface DialogData {
  id?: string;
  question?: string;
  answer?: string;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private toastService = inject(ToastService);
  private flashcardService = inject(FlashcardService);
  isOpen = signal<boolean>(false);
  mode = signal<DialogMode>(null);
  data = signal<DialogData>({});

  openEdit(data: DialogData) {
    this.data.set(data);
    this.mode.set('edit');
    this.isOpen.set(true);
  }

  openDelete(data: DialogData) {
    this.data.set(data);
    this.mode.set('delete');
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
    this.mode.set(null);
    this.data.set({});
  }

  updateCard(data: DialogData) {
    if (!data.id) return;
    try {
      this.flashcardService.updateFlashcard(parseInt(data.id), {
        question: data.question,
        answer: data.answer,
        category: data.category,
      }).then(() => {
        this.toastService.success('Card updated successfully.');
        this.close();
      }).catch((error: any) => {
        this.toastService.error(error?.message || 'Failed to update card');
      });
    } catch (error: any) {
      this.toastService.error(error?.message || 'Failed to update card');
    }
  }

  deleteCard(id: string) {
    try {
      this.flashcardService.deleteFlashcard(parseInt(id)).then(() => {
        this.toastService.success('Card deleted.');
        this.close();
      }).catch((error: any) => {
        this.toastService.error(error?.message || 'Failed to delete card');
      });
    } catch (error: any) {
      this.toastService.error(error?.message || 'Failed to delete card');
    }
  }
}
