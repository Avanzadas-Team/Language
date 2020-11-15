import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPerCountryComponent } from './user-per-country.component';

describe('UserPerCountryComponent', () => {
  let component: UserPerCountryComponent;
  let fixture: ComponentFixture<UserPerCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPerCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPerCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
