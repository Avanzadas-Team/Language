import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTeachLangComponent } from './users-teach-lang.component';

describe('UsersTeachLangComponent', () => {
  let component: UsersTeachLangComponent;
  let fixture: ComponentFixture<UsersTeachLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersTeachLangComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTeachLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all registered users per language to learn (Not a null or undifined JSON obejct)', () => {
    var upc = component.GetUPLL();
    expect(upc).not.toBe(undefined);
  });

  it('should get all registered users per language to teach (Not a null or undifined JSON obejct)', () => {
    var upc = component.GetUPLT();
    expect(upc).not.toBe(undefined);
  });
});
