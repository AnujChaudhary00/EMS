import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOrganisationComponent } from './about-organisation.component';

describe('AboutOrganisationComponent', () => {
  let component: AboutOrganisationComponent;
  let fixture: ComponentFixture<AboutOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOrganisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
