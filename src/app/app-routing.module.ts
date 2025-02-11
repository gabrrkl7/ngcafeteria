import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPedidoComponent } from './componentes/pedidos/criar-pedido/criar-pedido.component';
import { ListarPedidoComponent } from './componentes/pedidos/listar-pedido/listar-pedido.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPedido',
    pathMatch: 'full'
  },
  { path: 'criarPedido',
    component: CriarPedidoComponent
   },
  { path: 'listarPedido',
    component: ListarPedidoComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
