import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptNewComponent } from './sept-new.component';

describe('SeptNewComponent', () => {
  let component: SeptNewComponent;
  let fixture: ComponentFixture<SeptNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeptNewComponent]
    });
    fixture = TestBed.createComponent(SeptNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
