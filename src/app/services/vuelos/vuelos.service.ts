import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  private API_Vuelo = "http://localhost:8080/vuelo";
  constructor(
    private httpClient: HttpClient
  ) { }
  
  //Alistar
  public getAllVuelo(): Observable<any>{
    return this.httpClient.get(this.API_Vuelo);

  }
  //Referencia
  public searRef(ref:any): Observable<any>{
    return this.httpClient.get(this.API_Vuelo + "/query?ref" + ref);
  }
}
