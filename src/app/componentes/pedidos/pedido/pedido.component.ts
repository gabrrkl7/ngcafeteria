import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedido ={
    conteudo: 'Nâmathyy',
    descricao: 'namorada de 1,63cm',
    valor: 'R$ inestimável',
    modelo: 'modelo1',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
