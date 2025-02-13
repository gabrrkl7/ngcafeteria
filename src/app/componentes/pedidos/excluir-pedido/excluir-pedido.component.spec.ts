import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPedidoComponent } from './excluir-pedido.component';

describe('ExcluirPedidoComponent', () => {
  let component: ExcluirPedidoComponent;
  let fixture: ComponentFixture<ExcluirPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
