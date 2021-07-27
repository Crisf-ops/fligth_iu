import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private API_Serve = "http://localhost:8080/usuario"

  constructor(
    private httpClient: HttpClient
  ) { }
  
  //Alistar  
  public getAllCliente(): Observable<any>{
    return this.httpClient.get(this.API_Serve);
  }
  //Guardar
  public saveCliente(cliente:any): Observable<any>{
    return this.httpClient.post(this.API_Serve,cliente);
  }
  //Actualizar
  public idtCliente(cliente:any): Observable<any>{
    return this.httpClient.put(this.API_Serve + "/actualizar/" + cliente.clienteId,cliente);
  }
  //Eliminar
  public deleteCliente(id:any): Observable<any>{
    return this.httpClient.delete(this.API_Serve + "/eliminar/" + id);
  }
  //Buscar por indificacion
  public searchCliente(documento:any): Observable<any>{
    return this.httpClient.get(this.API_Serve + "/query?documento=" + documento);
  } 
}
