import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMultiTagsInputComponent } from './ngx-tags-input.component';

describe('NgxTagsInputComponent', () => {
  let component: NgxMultiTagsInputComponent;
  let fixture: ComponentFixture<NgxMultiTagsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMultiTagsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMultiTagsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
