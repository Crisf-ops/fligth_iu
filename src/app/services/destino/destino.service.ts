import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  private API_Serve = "http://localhost:8080/destino"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllDestinos(): Observable<any>{
    return this.httpClient.get(this.API_Serve);
  }
}
