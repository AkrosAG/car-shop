import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTeileDetailAnsichtComponent } from './auto-teile-detail-ansicht.component';

describe('AutoTeileDetailAnsichtComponent', () => {
  let component: AutoTeileDetailAnsichtComponent;
  let fixture: ComponentFixture<AutoTeileDetailAnsichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoTeileDetailAnsichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoTeileDetailAnsichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
