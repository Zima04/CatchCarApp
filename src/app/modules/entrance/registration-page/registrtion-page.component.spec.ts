import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrtionPageComponent } from './registrtion-page.component';

describe('RegistrtionPageComponent', () => {
  let component: RegistrtionPageComponent;
  let fixture: ComponentFixture<RegistrtionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrtionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrtionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
