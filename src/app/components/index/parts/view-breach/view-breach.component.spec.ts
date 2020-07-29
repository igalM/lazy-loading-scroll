import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBreachComponent } from './view-breach.component';

describe('ViewBreachComponent', () => {
  let component: ViewBreachComponent;
  let fixture: ComponentFixture<ViewBreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
