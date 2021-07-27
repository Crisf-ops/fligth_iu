import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrigenService {
  private API_Serve = "http://localhost:8080/origen"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllOrigen(): Observable<any>{
    return this.httpClient.get(this.API_Serve);
  }
}
