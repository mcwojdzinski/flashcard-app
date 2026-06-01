import { Injectable, inject, signal } from '@angular/core';
import { AuthService } from './auth.service';

export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category: string;
  knownCount: number;
}

export interface CreateFlashcardDTO {
  question: string;
  answer: string;
  category: string;
}

export interface UpdateFlashcardDTO {
  question?: string;
  answer?: string;
  category?: string;
  knownCount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private authService = inject(AuthService);
  flashcards = signal<Flashcard[]>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);

  async fetchFlashcards() {
    this.isLoading.set(true);
    this.error.set(null);
    try {
      const headers = this.authService.getAuthHeaders();
      const response = await fetch('/api/flashcards/me', {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch flashcards');
      }

      const data = await response.json();
      this.flashcards.set(data);
      return data;
    } catch (err: any) {
      this.error.set(err?.message || 'Failed to fetch flashcards');
      throw err;
    } finally {
      this.isLoading.set(false);
    }
  }

  async createFlashcard(flashcard: CreateFlashcardDTO) {
    try {
      const headers = this.authService.getAuthHeaders();
      const response = await fetch('/api/flashcards', {
        method: 'POST',
        headers,
        body: JSON.stringify(flashcard),
      });

      if (!response.ok) {
        console.error('[FlashcardService] create failed status', response.status);
        throw new Error('Failed to create flashcard');
      }

      const newCard = await response.json();
      this.flashcards.update(cards => [...cards, newCard]);
      return newCard;
    } catch (err: any) {
      this.error.set(err?.message || 'Failed to create flashcard');
      throw err;
    }
  }

  async updateFlashcard(id: number, updates: UpdateFlashcardDTO) {
    try {
      const headers = this.authService.getAuthHeaders();
      const response = await fetch(`/api/flashcards/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error('Failed to update flashcard');
      }

      const updated = await response.json();
      this.flashcards.update(cards =>
        cards.map(card => (card.id === id ? updated : card))
      );
      return updated;
    } catch (err: any) {
      this.error.set(err?.message || 'Failed to update flashcard');
      throw err;
    }
  }

  async deleteFlashcard(id: number) {
    try {
      const headers = this.authService.getAuthHeaders();
      const response = await fetch(`/api/flashcards/${id}`, {
        method: 'DELETE',
        headers,
      });

      if (!response.ok) {
        throw new Error('Failed to delete flashcard');
      }

      this.flashcards.update(cards => cards.filter(card => card.id !== id));
    } catch (err: any) {
      this.error.set(err?.message || 'Failed to delete flashcard');
      throw err;
    }
  }

  async incrementProgress(id: number) {
    try {
      const headers = this.authService.getAuthHeaders();
      const response = await fetch(`/api/flashcards/${id}/progress`, {
        method: 'PATCH',
        headers,
      });

      if (!response.ok) {
        throw new Error('Failed to increment progress');
      }

      const updated = await response.json();
      this.flashcards.update(cards =>
        cards.map(card => (card.id === id ? updated : card))
      );
      return updated;
    } catch (err: any) {
      this.error.set(err?.message || 'Failed to increment progress');
      throw err;
    }
  }

  async resetProgress(id: number) {
    try {
      const headers = this.authService.getAuthHeaders();
      const response = await fetch(`/api/flashcards/${id}/reset`, {
        method: 'PATCH',
        headers,
      });

      if (!response.ok) {
        throw new Error('Failed to reset progress');
      }

      const updated = await response.json();
      this.flashcards.update(cards =>
        cards.map(card => (card.id === id ? updated : card))
      );
      return updated;
    } catch (err: any) {
      this.error.set(err?.message || 'Failed to reset progress');
      throw err;
    }
  }
}
