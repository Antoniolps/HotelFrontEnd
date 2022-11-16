import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientesDto } from '../models/clientesDto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes : Cliente[] = [];

  constructor(private http: HttpClient) { }

  getCliente(): Observable<ClientesDto>{
    return this.http.get<ClientesDto>(environment.apiUrl + "/Customers");
  }

  cadastrarCliente(cliente:Cliente){
    return this.http.post(environment.apiUrl + "/Customers", cliente);
  }
}
