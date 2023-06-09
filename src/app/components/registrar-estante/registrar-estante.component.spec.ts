import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEstanteComponent } from './registrar-estante.component';

describe('RegistrarEstanteComponent', () => {
  let component: RegistrarEstanteComponent;
  let fixture: ComponentFixture<RegistrarEstanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEstanteComponent]
    });
    fixture = TestBed.createComponent(RegistrarEstanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
