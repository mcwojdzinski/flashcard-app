import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardContent } from './flashcard-content';

describe('FlashcardContent', () => {
  let component: FlashcardContent;
  let fixture: ComponentFixture<FlashcardContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardContent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
