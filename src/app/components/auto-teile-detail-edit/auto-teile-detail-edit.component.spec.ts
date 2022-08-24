import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTeileDetailEditComponent } from './auto-teile-detail-edit.component';

describe('AutoTeileDetailEditComponent', () => {
  let component: AutoTeileDetailEditComponent;
  let fixture: ComponentFixture<AutoTeileDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoTeileDetailEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoTeileDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
