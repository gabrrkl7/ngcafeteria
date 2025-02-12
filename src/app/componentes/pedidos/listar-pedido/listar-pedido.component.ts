import { PedidoService } from './../pedido.service';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  
  listaPedidos: Pedido[] = []

  constructor(private service: PedidoService){ }

  ngOnInit(): void {
    //this.service.listar().subscribe(resposta => this.listaPedidos = resposta)
  
    this.service.listar().subscribe((listaPedidos) => this.listaPedidos = listaPedidos)
  }

}
