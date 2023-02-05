import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/shared/cliente';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  formCliente!: FormGroup;
  constructor() {}

  onSubmit(){
    console.log(this.formCliente.value.nome)
    fetch("http://localhost:8080/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        { 
        name: this.formCliente.value.nome, 
        email: this.formCliente.value.email,
        phone: this.formCliente.value.numero,
        password: this.formCliente.value.cpf, 
      }
        ),
    }).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then((json) => {console.log(json)})
  }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      email: new FormControl(cliente.email),
      cpf: new FormControl(cliente.cpf),
      numero: new FormControl(cliente.numero),
    })
  }
}