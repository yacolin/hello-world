import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeekABooParentComponent } from './peek-a-boo-parent.component';

describe('PeekABooParentComponent', () => {
  let component: PeekABooParentComponent;
  let fixture: ComponentFixture<PeekABooParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeekABooParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeekABooParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
