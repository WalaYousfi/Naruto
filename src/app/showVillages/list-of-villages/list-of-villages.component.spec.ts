import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfVillagesComponent } from './list-of-villages.component';

describe('ListOfVillagesComponent', () => {
  let component: ListOfVillagesComponent;
  let fixture: ComponentFixture<ListOfVillagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfVillagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfVillagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
