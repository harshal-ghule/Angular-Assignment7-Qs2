import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellingFormComponent } from './travelling-form.component';

describe('TravellingFormComponent', () => {
  let component: TravellingFormComponent;
  let fixture: ComponentFixture<TravellingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
