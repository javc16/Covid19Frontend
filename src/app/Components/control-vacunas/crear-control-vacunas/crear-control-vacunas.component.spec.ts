import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearControlVacunasComponent } from './crear-control-vacunas.component';

describe('CrearControlVacunasComponent', () => {
  let component: CrearControlVacunasComponent;
  let fixture: ComponentFixture<CrearControlVacunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearControlVacunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearControlVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
