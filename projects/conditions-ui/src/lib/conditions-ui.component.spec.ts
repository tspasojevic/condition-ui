import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsUiComponent } from './conditions-ui.component';

describe('ConditionsUiComponent', () => {
  let component: ConditionsUiComponent;
  let fixture: ComponentFixture<ConditionsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
