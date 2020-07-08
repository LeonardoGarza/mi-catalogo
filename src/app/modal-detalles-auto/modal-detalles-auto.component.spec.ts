import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetallesAutoComponent } from './modal-detalles-auto.component';

describe('ModalDetallesAutoComponent', () => {
  let component: ModalDetallesAutoComponent;
  let fixture: ComponentFixture<ModalDetallesAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetallesAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetallesAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
