import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutoTeileComponentComponent } from './add-auto-teile-component.component';

describe('AddAutoTeileComponentComponent', () => {
  let component: AddAutoTeileComponentComponent;
  let fixture: ComponentFixture<AddAutoTeileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAutoTeileComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAutoTeileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
