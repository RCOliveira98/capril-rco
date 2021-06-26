import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerContatoComponent } from './container-contato.component';

describe('ContainerContatoComponent', () => {
  let component: ContainerContatoComponent;
  let fixture: ComponentFixture<ContainerContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
