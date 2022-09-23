import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditdetailsSidenavComponent } from './auditdetails-sidenav.component';

describe('AuditdetailsSidenavComponent', () => {
  let component: AuditdetailsSidenavComponent;
  let fixture: ComponentFixture<AuditdetailsSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditdetailsSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditdetailsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
