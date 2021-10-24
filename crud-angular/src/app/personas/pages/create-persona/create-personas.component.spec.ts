import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonasComponent } from './create-personas.component';

describe('CreatePersonasComponent', () => {
  let component: CreatePersonasComponent;
  let fixture: ComponentFixture<CreatePersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
