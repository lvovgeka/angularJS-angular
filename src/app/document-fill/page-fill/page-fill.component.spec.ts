import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFillComponent } from './page-fill.component';

describe('PageFillComponent', () => {
  let component: PageFillComponent;
  let fixture: ComponentFixture<PageFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
