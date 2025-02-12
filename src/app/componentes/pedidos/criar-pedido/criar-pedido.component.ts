import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent implements OnInit {
  pedido = {
    conteudo: '',
    descricao: '',
    modelo:'',
    valor:'',
  }

  constructor(
    private service: PedidoService, 
    private router: Router
  ) 
    { }

  ngOnInit(): void {
  }

  criarPedido(){
    this.service.criar(this.pedido).subscribe(() => {
      this.router.navigate(['/listarPedido'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPedido'])
  }

  ajustarValor(input: { value: string; }) {
    if (!input.value.startsWith('R$')) {
        input.value = 'R$' + input.value.replace('R$', '');
    }
  }

}
