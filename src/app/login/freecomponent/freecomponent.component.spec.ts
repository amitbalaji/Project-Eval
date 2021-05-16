import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreecomponentComponent } from './freecomponent.component';

describe('FreecomponentComponent', () => {
  let component: FreecomponentComponent;
  let fixture: ComponentFixture<FreecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
