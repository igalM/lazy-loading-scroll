import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBreachComponent } from './single-breach.component';

describe('SingleBreachComponent', () => {
  let component: SingleBreachComponent;
  let fixture: ComponentFixture<SingleBreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
