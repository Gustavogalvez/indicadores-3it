import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorDetalleComponent } from './indicador-detalle.component';

describe('IndicadorDetalleComponent', () => {
  let component: IndicadorDetalleComponent;
  let fixture: ComponentFixture<IndicadorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
