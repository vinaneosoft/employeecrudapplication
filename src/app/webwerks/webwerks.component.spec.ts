import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebwerksComponent } from './webwerks.component';

describe('WebwerksComponent', () => {
  let component: WebwerksComponent;
  let fixture: ComponentFixture<WebwerksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebwerksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebwerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
