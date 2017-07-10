import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseconvertorComponent } from './baseconvertor.component';

describe('BaseconvertorComponent', () => {
  let component: BaseconvertorComponent;
  let fixture: ComponentFixture<BaseconvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseconvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseconvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
