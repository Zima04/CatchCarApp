import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrancePartComponent } from './entrance-part.component';

describe('EntrancePartComponent', () => {
  let component: EntrancePartComponent;
  let fixture: ComponentFixture<EntrancePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrancePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrancePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
