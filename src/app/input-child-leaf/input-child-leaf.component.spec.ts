import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputChildLeafComponent } from './input-child-leaf.component';

describe('InputChildLeafComponent', () => {
  let component: InputChildLeafComponent;
  let fixture: ComponentFixture<InputChildLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputChildLeafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputChildLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
