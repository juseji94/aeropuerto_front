import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.css']
})
export class PilotoComponent implements OnInit {

  constructor(private api:ApiService,private fb:FormBuilder) { }

  pilotos:any =[]
  form_piloto=this.fb.group(
    {
      codigo_piloto:['',Validators.required],
      nombre_piloto:['',Validators.required],
      horas_vuelo_piloto:['',Validators.required],
    }
  )
  ver_formulario_pilotos: boolean = false;

  ngOnInit(): void {
    this.listar_piloto()
  }

  listar_piloto(){
    this.api.get('piloto')
      .subscribe(data=>{
          if(data!=undefined){
            this.pilotos=data;
          }
        }

      )
  }

  guardar_piloto(){
    this.api.add('piloto',this.form_piloto.value)
      .subscribe(data=>{
          if(data!=undefined){
            //data trae el registro que guardamos.
            this.ver_formulario_pilotos=false
            this.form_piloto.reset()
            this.listar_piloto();
          }
        }

      )
  }
}
