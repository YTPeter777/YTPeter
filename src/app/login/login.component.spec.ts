import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { LOGINComponent } from './login.component';

describe('LOGINComponent', () => {
  let component: LOGINComponent;
  let fixture: ComponentFixture<LOGINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOGINComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LOGINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
