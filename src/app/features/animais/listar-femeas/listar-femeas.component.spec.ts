import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFemeasComponent } from './listar-femeas.component';

describe('ListarFemeasComponent', () => {
  let component: ListarFemeasComponent;
  let fixture: ComponentFixture<ListarFemeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFemeasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFemeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
