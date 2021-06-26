import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaisDestaqueComponent } from './animais-destaque.component';

describe('AnimaisDestaqueComponent', () => {
  let component: AnimaisDestaqueComponent;
  let fixture: ComponentFixture<AnimaisDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaisDestaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaisDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
