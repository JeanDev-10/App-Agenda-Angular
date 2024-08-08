import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMComponent } from './crm.component';

describe('CRMComponent', () => {
  let component: CRMComponent;
  let fixture: ComponentFixture<CRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
