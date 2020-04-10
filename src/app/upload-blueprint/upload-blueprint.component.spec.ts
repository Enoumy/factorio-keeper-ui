import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBlueprintComponent } from './upload-blueprint.component';

describe('UploadBlueprintComponent', () => {
  let component: UploadBlueprintComponent;
  let fixture: ComponentFixture<UploadBlueprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBlueprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBlueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
