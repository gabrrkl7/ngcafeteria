import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  
  listaPedidos = [
    {
      conteudo: 'Comunicação componentes',
      descricao: 'Angular',
      valor: 'R$ 200',
      modelo: 'modelo1',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
