import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: []
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users (Not a null or undifined JSON obejct)', () => {
    var users = service.GetUsers();
    expect(users).not.toBe(undefined);
  });

  it('should get all registered users per country (Not a null or undifined JSON obejct)', () => {
    var users = service.GetUsersPerCountry();
    expect(users).not.toBe(undefined);
  });

});
