import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-excluir-pedido',
  templateUrl: './excluir-pedido.component.html',
  styleUrls: ['./excluir-pedido.component.css']
})
export class ExcluirPedidoComponent implements OnInit {
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

  excluirPedido() {
    if (this.pedido.id) {
      this.service.excluir(this.pedido.id).subscribe(() => {
        this.router.navigate(['/listarPedido'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPedido'])
  }

}
