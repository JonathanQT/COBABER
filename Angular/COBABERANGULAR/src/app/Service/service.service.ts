import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Persona } from '../Modelo/Persona';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  //Url='demo/personas';
  
  Url='http://localhost:8080/andreslab/rest/opain/consultar';


  getPersonas(){    

    return this.http.get<Persona[]>(this.Url);
    
  }

}
