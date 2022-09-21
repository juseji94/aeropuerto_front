import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";

@Injectable({
  providedIn:'root'
})
export class AeropuertoService{

  constructor(private api:ApiService,private fb:FormBuilder,private router:Router) {
  }
  aviones:any =[]
  form_avion=this.fb.group(
    {
      id:[''],
      codigo_avion:['',Validators.required],
      tipo_avion:['',Validators.required],
      marca:['',Validators.required],
      ciudad_base:['',Validators.required],
    }
  )
  ver_formulario_aviones: boolean = false;

  items:MenuItem[] = [
    {label: 'Aviones', icon: 'fa-solid fa-plane', command: (event) => {
        this.router.navigate(['/inicio'])
      }},
    {label: 'Pilotos', icon: 'fa-solid fa-user',command: (event) => {
        this.router.navigate(['/piloto'])
      }},
  ];

  listar_avion(){
    this.api.get('avion')
      .subscribe(data=>{
          if(data!=undefined){
            this.aviones=data;
          }
        }

      )
  }

  llenar_formulario_avion(avion:any){
    this.form_avion.patchValue(
      {
        id:avion.id,
        codigo_avion:avion.codigo_avion,
        tipo_avion:avion.tipo_avion,
        marca:avion.marca,
        ciudad_base:avion.ciudad_base,
      }
    )
  }

  guardar_actualizar_Avion(){
    if(this.form_avion.value['id']){
      this.actualizar_Avion()
    }else{
      this.guardar_avion()
    }
  }

  guardar_avion(){
    this.api.add('avion',this.form_avion.value)
      .subscribe(data=>{
          if(data!=undefined){
            //data trae el registro que guardamos.
            this.ver_formulario_aviones=false
            this.form_avion.reset()
            this.listar_avion();
          }
        }

      )
  }
  actualizar_Avion(){
    this.api.update('avion',this.form_avion.value['id'],this.form_avion.value)
      .subscribe(data=>{
          if(data!=undefined){
            //data trae el registro que guardamos.
            this.ver_formulario_aviones=false
            this.form_avion.reset()
            this.listar_avion();
          }
        }

      )
  }

}
