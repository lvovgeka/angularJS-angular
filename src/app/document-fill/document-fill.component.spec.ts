import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentFillComponent } from './document-fill.component';

describe('DocumentFillComponent', () => {
  let component: DocumentFillComponent;
  let fixture: ComponentFixture<DocumentFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
