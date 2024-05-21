import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSFunctionsComponent } from './rx-js-functions.component';

describe('RxJSFunctionsComponent', () => {
  let component: RxJSFunctionsComponent;
  let fixture: ComponentFixture<RxJSFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxJSFunctionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxJSFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
