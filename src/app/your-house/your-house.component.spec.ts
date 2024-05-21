import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourHouseComponent } from './your-house.component';

describe('YourHouseComponent', () => {
  let component: YourHouseComponent;
  let fixture: ComponentFixture<YourHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourHouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
