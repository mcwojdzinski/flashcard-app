import { Injectable, inject, signal } from '@angular/core';
import { ToastService } from './toast.service';

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
    // Implement card update logic
    console.log('Updating card:', data);
    this.toastService.success('Card updated successfully.');
    this.close();
  }

  deleteCard(id: string) {
    // Implement card delete logic
    console.log('Deleting card:', id);
    this.toastService.success('Card deleted.');
    this.close();
  }
}
