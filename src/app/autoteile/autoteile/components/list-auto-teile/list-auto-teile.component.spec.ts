import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutoTeileComponent } from './list-auto-teile.component';

describe('ListAutoTeileComponent', () => {
  let component: ListAutoTeileComponent;
  let fixture: ComponentFixture<ListAutoTeileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAutoTeileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAutoTeileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
