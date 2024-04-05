import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from '../client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private http: HttpClient ) { }

  save( client: Client ) : Observable<Client> {
    return this.http.post<Client>('http://localhost:9001/api/clients', client);
  }

  update( client: Client ) : Observable<any> {
    return this.http.put<Client>(`http://localhost:9001/api/clients/${client.id}`, client);
  }

  findAll() : Observable<Client[]> {
    return this.http.get<Client[]> ('http://localhost:9001/api/clients');
  }

  getById( id: string ) : Observable<Client> {
    return this.http.get<any> (`http://localhost:9001/api/clients/getId/${id}`);
  } 

  deleteId( client : Client ) : Observable<any> {
    return this.http.delete<any>(`http://localhost:9001/api/clients/${client.id}`);
  }  
}
