import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardControls } from './flashcard-controls';

describe('FlashcardControls', () => {
  let component: FlashcardControls;
  let fixture: ComponentFixture<FlashcardControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardControls],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
