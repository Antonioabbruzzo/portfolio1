import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PappeComponent } from './pappe.component';

describe('PappeComponent', () => {
  let component: PappeComponent;
  let fixture: ComponentFixture<PappeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PappeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PappeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
