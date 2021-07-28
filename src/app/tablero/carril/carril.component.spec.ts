import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrilComponent } from './carril.component';

describe('CarrilComponent', () => {
  let component: CarrilComponent;
  let fixture: ComponentFixture<CarrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
