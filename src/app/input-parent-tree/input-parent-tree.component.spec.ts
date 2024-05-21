import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputParentTreeComponent } from './input-parent-tree.component';

describe('InputParentTreeComponent', () => {
  let component: InputParentTreeComponent;
  let fixture: ComponentFixture<InputParentTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputParentTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputParentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
