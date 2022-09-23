import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlideShowComponent } from './image-slide-show.component';

describe('ImageSlideShowComponent', () => {
  let component: ImageSlideShowComponent;
  let fixture: ComponentFixture<ImageSlideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSlideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
