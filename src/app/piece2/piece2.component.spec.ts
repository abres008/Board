import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piece2Component } from './piece2.component';

describe('Piece2Component', () => {
  let component: Piece2Component;
  let fixture: ComponentFixture<Piece2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Piece2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Piece2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
