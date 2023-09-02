import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeDashboardComponent } from './authorize-dashboard.component';

describe('AuthorizeDashboardComponent', () => {
  let component: AuthorizeDashboardComponent;
  let fixture: ComponentFixture<AuthorizeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
