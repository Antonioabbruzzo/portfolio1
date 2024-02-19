import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataTitleComponent } from './edit-data-title.component';

describe('EditDataTitleComponent', () => {
  let component: EditDataTitleComponent;
  let fixture: ComponentFixture<EditDataTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDataTitleComponent]
    });
    fixture = TestBed.createComponent(EditDataTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
