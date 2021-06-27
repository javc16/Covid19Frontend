import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlVacunasComponent } from './control-vacunas.component';

describe('ControlVacunasComponent', () => {
  let component: ControlVacunasComponent;
  let fixture: ComponentFixture<ControlVacunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlVacunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
