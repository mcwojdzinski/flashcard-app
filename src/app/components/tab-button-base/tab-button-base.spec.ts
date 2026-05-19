import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabButtonBase } from './tab-button-base';

describe('TabButtonBase', () => {
  let component: TabButtonBase;
  let fixture: ComponentFixture<TabButtonBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabButtonBase],
    }).compileComponents();

    fixture = TestBed.createComponent(TabButtonBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
