import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CriarPedidoComponent } from './componentes/pedidos/criar-pedido/criar-pedido.component';
import { FormsModule } from '@angular/forms';
import { ListarPedidoComponent } from './componentes/pedidos/listar-pedido/listar-pedido.component';
import { PedidoComponent } from './componentes/pedidos/pedido/pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPedidoComponent } from './componentes/pedidos/excluir-pedido/excluir-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CriarPedidoComponent,
    ListarPedidoComponent,
    PedidoComponent,
    ExcluirPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
