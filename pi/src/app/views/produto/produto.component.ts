import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from 'src/app/produto/shared/produto';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from "src/app/app.component";


export interface PeriodicElement {
  name: string;
  id: number;
  description: number;
  price: string;
}


let ELEMENT_DATA: PeriodicElement[] = [];
let jsonR:any;
let data: Object;
let i = 0;

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, AfterViewInit {
  formProduto!: FormGroup;
  constructor(public myapp: AppComponent){}


  putData(){
    fetch(`http://localhost:8080/products/${parseInt(this.formProduto.value.id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body:  JSON.stringify(
        { 
        name: this.formProduto.value.name, 
        description: this.formProduto.value.description,
        price: this.formProduto.value.price,
        imgurl: null
      }
        )
    }).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then((json) => {console.log(json)})
  }

  deleteData(){
    console.log(this.formProduto.value)
    fetch(`http://localhost:8080/products/${this.formProduto.value.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then((json) => {console.log(json)})
  }

  onSubmit(){
    console.log(this.formProduto.value.nome)
    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        { 
        name: this.formProduto.value.name, 
        description: this.formProduto.value.description,
        price: this.formProduto.value.price,
        imgurl: null
      }
        ),
    }).then(
      (response) => {
        console.log(response)
        return response.json()
      }
    ).then((json) => {console.log(json)})
  }

  getData(){
    ELEMENT_DATA = [];
    i = 0;
    fetch("http://localhost:8080/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(
      (response) => {
        // console.log(response)
        return response.json()
      }
    ).then((json) => {
      console.log(json)
      jsonR = json;
      json.forEach((element: any) => {
        console.log(element.name)
        i++
        ELEMENT_DATA.push({
          id: element.id,
          name: element.name,
          description: element.description,
          price: element.price
        })
        // ELEMENT_DATA = [{
          //   position: i,
        //   name: element.name,
        //   weight: element.description,
        //   symbol: element.price
        // }]
        console.log(element)
        this.myapp.createProduto()
      });
    })
    
    
    console.log(ELEMENT_DATA)
    
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  


  ngOnInit() {
    this.createForm(new Produto());
  }

  createForm(produto: Produto) {
    this.formProduto = new FormGroup({
      id: new FormControl(produto.id),
      name: new FormControl(produto.name),
      description: new FormControl(produto.description),
      price: new FormControl(produto.price),
    })
  }
}
