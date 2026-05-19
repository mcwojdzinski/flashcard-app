import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardContainer } from './flashcard-container';

describe('FlashcardContainer', () => {
  let component: FlashcardContainer;
  let fixture: ComponentFixture<FlashcardContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
