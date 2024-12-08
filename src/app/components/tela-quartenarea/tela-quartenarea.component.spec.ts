import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaQuartenareaComponent } from './tela-quartenarea.component';

describe('TelaQuartenareaComponent', () => {
  let component: TelaQuartenareaComponent;
  let fixture: ComponentFixture<TelaQuartenareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaQuartenareaComponent]
    });
    fixture = TestBed.createComponent(TelaQuartenareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
