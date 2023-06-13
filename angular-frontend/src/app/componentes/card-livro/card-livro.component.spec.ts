import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLivroComponent } from './card-livro.component';

describe('CardLivroComponent', () => {
  let component: CardLivroComponent;
  let fixture: ComponentFixture<CardLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLivroComponent]
    });
    fixture = TestBed.createComponent(CardLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
