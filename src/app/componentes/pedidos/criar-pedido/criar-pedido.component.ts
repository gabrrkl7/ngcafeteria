import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent implements OnInit {
  pedido = {
    id: '1',
    conteudo: 'aprendendo angular',
    descricao: 'Café em grãos da mogiana paulista',
    modelo:'modelo1',
    valor:'23',
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPedido(){

  }

  cancelar(){
    
  }

  ajustarValor(input: { value: string; }) {
    if (!input.value.startsWith('R$')) {
        input.value = 'R$' + input.value.replace('R$', '');
    }
  }

}
