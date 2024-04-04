import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:9001/api/clients';

  constructor(private httpClient: HttpClient) { }

  getClient(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/getId/${id}`);
  }

  createClient(client: Object): Observable<Object> {
    return this.httpClient.post(`${this.apiUrl}`, client);
  }

  updateClient(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, value);
  }

  deleteClient(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  getClientList(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`);
  }

}
