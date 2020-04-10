import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintsListComponent } from './blueprints-list.component';

describe('BlueprintsListComponent', () => {
  let component: BlueprintsListComponent;
  let fixture: ComponentFixture<BlueprintsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueprintsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprintsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
