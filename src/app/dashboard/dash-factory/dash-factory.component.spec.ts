import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFactoryComponent } from './dash-factory.component';

describe('DashFactoryComponent', () => {
  let component: DashFactoryComponent;
  let fixture: ComponentFixture<DashFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
