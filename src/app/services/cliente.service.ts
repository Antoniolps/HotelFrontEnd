import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes : Cliente[] = [];

  constructor(private http: HttpClient) { }

  getCliente(): Observable<Cliente>{
    return this.http.get<Cliente>(environment.apiUrl);
  }

  cadastrarCliente(cliente:Cliente){
    return this.http.post(environment.apiUrl + "/Customers", cliente);
  }
}
