import { Component } from '@angular/core';
import {AeropuertoService} from "./providers/aeropuerto.service";
import {ApiService} from "./providers/api.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public aeropuerto:AeropuertoService,public api:ApiService) {
  }

  /*resultado:number =0;
  sumar(num1:string,num2:string){
    this.resultado = parseInt(num1)+parseInt(num2);
  }

  restar(num1: string, num2: string) {
    this.resultado = parseInt(num1) - parseInt(num2);
  }

  multiplicar(num1: string, num2: string) {
    this.resultado = parseInt(num1) * parseInt(num2);
  }

  dividir(num1: string, num2: string) {
    this.resultado = parseInt(num1) / parseInt(num2);
  }*/
  ///////////////////////////////
  /*
  lista = ['Carlos','Pedro','Maria','Juan'];
  lista2= [
    {'nombre':'Pablo','edad':29},
    {'nombre':'Juan','edad':27},
    {'nombre':'Maria','edad':24},
    {'nombre':'Carlos','edad':13},
  ]

  adicionar_persona(nombre:string,byear:string) {
    let edad:number = 2022-parseInt(byear);
    this.lista2.push({'nombre':nombre,'edad':edad})
  }

  borrar_persona(persona:any) {
    this.lista2.splice(this.lista2.indexOf(persona),1)
  }*/
}
