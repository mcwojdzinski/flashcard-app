import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardSection } from './flashcard-section';

describe('FlashcardSection', () => {
  let component: FlashcardSection;
  let fixture: ComponentFixture<FlashcardSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
