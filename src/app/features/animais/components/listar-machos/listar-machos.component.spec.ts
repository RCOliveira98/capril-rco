import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMachosComponent } from './listar-machos.component';

describe('ListarMachosComponent', () => {
  let component: ListarMachosComponent;
  let fixture: ComponentFixture<ListarMachosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMachosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
