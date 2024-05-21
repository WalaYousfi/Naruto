import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryInputsComponent } from './try-inputs.component';

describe('TryInputsComponent', () => {
  let component: TryInputsComponent;
  let fixture: ComponentFixture<TryInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TryInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TryInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
