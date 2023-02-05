import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { FormularioComponent } from './views/formulario/formulario.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { VendasComponent } from './views/vendas/vendas.component';
import { RelatorioComponent } from './views/relatorio/relatorio.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent{
  title = 'pi';
  @ViewChild('container', {read: ViewContainerRef})
  container!: ViewContainerRef;
  // createCadastro(){
  //   console.log('teste')
  //   this.container.clear()
  //   this.container.createComponent(FormularioComponent)
  // }
  createProduto(){
    console.log('teste')
    this.container.clear()
    this.container.createComponent(ProdutoComponent)
  }
  // createVendas(){
  //   console.log('teste')
  //   this.container.clear()
  //   this.container.createComponent(VendasComponent)
  // }
  // createRelatorio(){
  //   console.log('teste')
  //   this.container.clear()
  //   this.container.createComponent(RelatorioComponent)
  // }

  
}
