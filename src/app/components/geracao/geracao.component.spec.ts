import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeracaoComponent } from './geracao.component';

describe('GeracaoComponent', () => {
  let component: GeracaoComponent;
  let fixture: ComponentFixture<GeracaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeracaoComponent]
    });
    fixture = TestBed.createComponent(GeracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
