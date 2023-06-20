import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLivroPreviewComponent } from './card-livro-preview.component';

describe('CardLivroPreviewComponent', () => {
  let component: CardLivroPreviewComponent;
  let fixture: ComponentFixture<CardLivroPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLivroPreviewComponent]
    });
    fixture = TestBed.createComponent(CardLivroPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
