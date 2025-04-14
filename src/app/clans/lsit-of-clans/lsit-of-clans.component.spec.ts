import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsitOfClansComponent } from './lsit-of-clans.component';

describe('LsitOfClansComponent', () => {
  let component: LsitOfClansComponent;
  let fixture: ComponentFixture<LsitOfClansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LsitOfClansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LsitOfClansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
