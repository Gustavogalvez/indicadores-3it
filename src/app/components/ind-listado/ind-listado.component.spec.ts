import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndListadoComponent } from './ind-listado.component';

describe('IndListadoComponent', () => {
  let component: IndListadoComponent;
  let fixture: ComponentFixture<IndListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
