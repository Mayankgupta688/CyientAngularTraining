import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseServicedataComponent } from './use-servicedata.component';

describe('UseServicedataComponent', () => {
  let component: UseServicedataComponent;
  let fixture: ComponentFixture<UseServicedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseServicedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseServicedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
