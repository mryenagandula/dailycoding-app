import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsSideNavComponent } from './userdetails-side-nav.component';

describe('UserdetailsSideNavComponent', () => {
  let component: UserdetailsSideNavComponent;
  let fixture: ComponentFixture<UserdetailsSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailsSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
