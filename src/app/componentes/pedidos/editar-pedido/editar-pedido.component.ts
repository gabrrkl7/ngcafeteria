import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {
  
  pedido: Pedido = {
    id: 0,
    modelo: '',
    conteudo: '',
    descricao: '',
    valor: '',
  }

  constructor(
    private service: PedidoService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe(pedido => {
      this.pedido = pedido;
    })
  }

  editarPedido() {
    this.service.editar((this.pedido)).subscribe(pedido => {
      this.pedido = pedido;
      this.router.navigate(['/listarPedido'])
    })
  }

}
