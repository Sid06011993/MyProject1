import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteanimationComponent } from './websiteanimation.component';

describe('WebsiteanimationComponent', () => {
  let component: WebsiteanimationComponent;
  let fixture: ComponentFixture<WebsiteanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteanimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
