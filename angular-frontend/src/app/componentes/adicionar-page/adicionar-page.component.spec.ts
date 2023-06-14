import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPageComponent } from './adicionar-page.component';

describe('AdicionarPageComponent', () => {
  let component: AdicionarPageComponent;
  let fixture: ComponentFixture<AdicionarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarPageComponent]
    });
    fixture = TestBed.createComponent(AdicionarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
