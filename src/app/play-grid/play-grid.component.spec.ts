import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayGridComponent } from './play-grid.component';

describe('PlayGridComponent', () => {
  let component: PlayGridComponent;
  let fixture: ComponentFixture<PlayGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
