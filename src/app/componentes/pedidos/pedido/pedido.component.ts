import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @Input() pedido: Pedido = {
    conteudo: '',
    descricao: '',
    valor: '',
    modelo: ''  
  }


  getIcons(modelo: string): number[] {
    switch (modelo) {
        case 'modelo1':
            return [1];
        case 'modelo2':
            return [1, 1];
        case 'modelo3':
            return [1, 1, 1];
        default:
            return [];
    }
}


  constructor() { }

  ngOnInit(): void {
  }

}
