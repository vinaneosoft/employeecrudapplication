import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoEmployeeComponent } from './neo-employee.component';

describe('NeoEmployeeComponent', () => {
  let component: NeoEmployeeComponent;
  let fixture: ComponentFixture<NeoEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeoEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
