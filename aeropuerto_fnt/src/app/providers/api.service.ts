import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usuario: any;
  base_url = 'http://127.0.0.1:8000'
  header_login = new HttpHeaders().set('Content-Type', 'application/json')
  options_login = {headers: this.header_login}
  header_token:any
  options_token:any

  constructor(private http: HttpClient) {
  }

  login(data: any) {
    let url = `${this.base_url + '/token'}`;
    let credenciales = JSON.stringify(data)
    return this.http.post(url, credenciales, this.options_login).pipe(catchError(this.handleError<any>()))
  }

  get(endpoint:string):Observable<any[]>{
    let url = `${this.base_url + '/'+endpoint+'/'}`;
    return this.http.get(url, this.options_token).pipe(catchError(this.handleError<any>()))
  }

  add(endpoint:string,data:any){
    let url = `${this.base_url + '/'+endpoint+'/'}`;
    let dJASON = JSON.stringify(data);
    return this.http.post(url,dJASON, this.options_token).pipe(catchError(this.handleError<any>()))
  }
  update(endpoint:string,id:any,data:any){
    let url = `${this.base_url + '/'+endpoint+'/'+id+'/'}`;
    let dJASON = JSON.stringify(data);
    return this.http.patch(url,dJASON, this.options_token).pipe(catchError(this.handleError<any>()))
  }

  crear_header_token(token:string){
    this.header_token = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Token '+token);
    this.options_token = {headers: this.header_token};
  }


  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.error)
      return of(result as T);
    };
  }
}
