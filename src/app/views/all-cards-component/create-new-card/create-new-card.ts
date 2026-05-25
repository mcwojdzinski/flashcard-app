import { Component, inject, signal } from '@angular/core';
import { Input } from "../../../components/shared/input/input";
import { Textarea } from "../../../components/shared/textarea/textarea";
import { Button } from "../../../components/shared/button/button";
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-create-new-card',
  imports: [Input, Textarea, Button],
  templateUrl: './create-new-card.html',
  styleUrl: './create-new-card.css',
})
export class CreateNewCard {
  private toastService = inject(ToastService);
  
  questionValue = signal('');
  answerValue = signal('');
  categoryValue = signal('');

  questionError = signal(false);
  answerError = signal(false);
  categoryError = signal(false);

  validateFields(): boolean {
    const isQuestionValid = this.questionValue().trim() !== '';
    const isAnswerValid = this.answerValue().trim() !== '';
    const isCategoryValid = this.categoryValue().trim() !== '';

    this.questionError.set(!isQuestionValid);
    this.answerError.set(!isAnswerValid);
    this.categoryError.set(!isCategoryValid);

    return isQuestionValid && isAnswerValid && isCategoryValid;
  }

  onCreate() {
    if (!this.validateFields()) return;

    // Create card logic here
    console.log('Creating card:', {
      question: this.questionValue(),
      answer: this.answerValue(),
      category: this.categoryValue()
    });

    this.toastService.success('Card created successfully.');
    
    // Reset form
    this.questionValue.set('');
    this.answerValue.set('');
    this.categoryValue.set('');
    this.questionError.set(false);
    this.answerError.set(false);
    this.categoryError.set(false);
  }
}
