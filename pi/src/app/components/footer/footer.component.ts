import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { FormularioComponent } from "src/app/views/formulario/formulario.component";
import { AppComponent } from "src/app/app.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  constructor(public myapp: AppComponent) {}

  createCompanent(event: Event) {
    // if((event.target as HTMLSpanElement).innerText == "Relatorio"){
    //   this.myapp.createRelatorio();
    // }
    // if((event.target as HTMLSpanElement).innerText == "Cadastro"){
    //   this.myapp.createCadastro();
    // }
    if((event.target as HTMLSpanElement).innerText == "Produto"){
      this.myapp.createProduto();
    }
    // if((event.target as HTMLSpanElement).innerText == "Vendas"){
    //   this.myapp.createVendas();
    // }
  }
}
