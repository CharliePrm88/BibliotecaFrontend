import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiClientiComponent } from './aggiungi-clienti.component';

describe('AggiungiClientiComponent', () => {
  let component: AggiungiClientiComponent;
  let fixture: ComponentFixture<AggiungiClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
