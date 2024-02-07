import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBreweryComponent } from './single-brewery.component';

describe('SingleBreweryComponent', () => {
  let component: SingleBreweryComponent;
  let fixture: ComponentFixture<SingleBreweryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBreweryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
