import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaClientiComponent } from './modifica-clienti.component';

describe('ModificaClientiComponent', () => {
  let component: ModificaClientiComponent;
  let fixture: ComponentFixture<ModificaClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
