import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAndTagsComponent } from './categories-and-tags.component';

describe('CategoriesAndTagsComponent', () => {
  let component: CategoriesAndTagsComponent;
  let fixture: ComponentFixture<CategoriesAndTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesAndTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesAndTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
