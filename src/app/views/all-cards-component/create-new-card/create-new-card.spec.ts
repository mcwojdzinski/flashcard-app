import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCard } from './create-new-card';

describe('CreateNewCard', () => {
  let component: CreateNewCard;
  let fixture: ComponentFixture<CreateNewCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
