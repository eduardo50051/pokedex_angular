import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTerceareaComponent } from './tela-tercearea.component';

describe('TelaTerceareaComponent', () => {
  let component: TelaTerceareaComponent;
  let fixture: ComponentFixture<TelaTerceareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaTerceareaComponent]
    });
    fixture = TestBed.createComponent(TelaTerceareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
