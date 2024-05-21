import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToViewComponent } from './child-to-view.component';

describe('ChildToViewComponent', () => {
  let component: ChildToViewComponent;
  let fixture: ComponentFixture<ChildToViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildToViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
