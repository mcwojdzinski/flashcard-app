import { Component, inject, signal, effect, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Input } from "../input/input";
import { Textarea } from "../textarea/textarea";
import { Button } from "../button/button";
import { DialogService } from '../../../services/dialog.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dialog',
  imports: [Input, Textarea, Button, NgClass
  ],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {
  private dialogService = inject(DialogService);
  private document = inject(DOCUMENT);
  isOpen = this.dialogService.isOpen;
  mode = this.dialogService.mode;
  data = this.dialogService.data;

  @ViewChild('dialogElement') dialogElement?: ElementRef<HTMLDialogElement>;

  questionValue = signal('');
  answerValue = signal('');
  categoryValue = signal('');

  questionError = signal(false);
  answerError = signal(false);
  categoryError = signal(false);

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.questionValue.set(this.data().question || '');
        this.answerValue.set(this.data().answer || '');
        this.categoryValue.set(this.data().category || '');
        // Reset errors when opening
        this.questionError.set(false);
        this.answerError.set(false);
        this.categoryError.set(false);
        setTimeout(() => {
          this.dialogElement?.nativeElement.focus();
        }, 0);
        // Prevent scroll
        this.document.body.style.overflow = 'hidden';
      } else {
        // Restore scroll
        this.document.body.style.overflow = 'auto';
      }
    });
  }

  validateFields(): boolean {
    const isQuestionValid = this.questionValue().trim() !== '';
    const isAnswerValid = this.answerValue().trim() !== '';
    const isCategoryValid = this.categoryValue().trim() !== '';

    this.questionError.set(!isQuestionValid);
    this.answerError.set(!isAnswerValid);
    this.categoryError.set(!isCategoryValid);

    return isQuestionValid && isAnswerValid && isCategoryValid;
  }

  @HostListener('keydown.escape')
  onEscapePress() {
    if (this.isOpen()) {
      this.onCancel();
    }
  }

  @HostListener('keydown.tab', ['$event'])
  onTabPress(event: any) {
    if (!this.isOpen()) return;

    const keyboardEvent = event as KeyboardEvent;
    const dialog = this.dialogElement?.nativeElement;
    if (!dialog) return;

    const focusableElements = dialog.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (keyboardEvent.shiftKey) {
      if (this.document.activeElement === firstElement) {
        lastElement.focus();
        keyboardEvent.preventDefault();
      }
    } else {
      if (this.document.activeElement === lastElement) {
        firstElement.focus();
        keyboardEvent.preventDefault();
      }
    }
  }

  onUpdate() {
    if (!this.validateFields()) return;

    this.dialogService.updateCard({
      id: this.data().id,
      question: this.questionValue(),
      answer: this.answerValue(),
      category: this.categoryValue()
    });
  }

  onDelete() {
    const id = this.data().id;
    if (id) {
      this.dialogService.deleteCard(id);
    }
  }

  onCancel() {
    this.dialogService.close();
  }
}
