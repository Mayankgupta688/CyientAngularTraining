import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingSwitchComponent } from './using-switch.component';

describe('UsingSwitchComponent', () => {
  let component: UsingSwitchComponent;
  let fixture: ComponentFixture<UsingSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
