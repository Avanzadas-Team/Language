import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPerCountryComponent } from './user-per-country.component';

describe('UserPerCountryComponent', () => {
  let component: UserPerCountryComponent;
  let fixture: ComponentFixture<UserPerCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPerCountryComponent],
      imports: [HttpClientModule]
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

  it('should get all registered users per country (Not a null or undifined JSON obejct)', () => {
    var upc = component.GetUPC();
    expect(upc).not.toBe(undefined);
  });
});
