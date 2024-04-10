import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API_Spring = "http://localhost:9005/api/services";

  constructor(private httpClient: HttpClient) { }

  create(service: Service): Observable<Service>{
    return this.httpClient.post<Service>("${this.API_Spring}", service);
  }

  update(service: Service): Observable<any>{
    return this.httpClient.put<Service>(`${this.API_Spring}/${service.serviceID}`, service);
  }

  findAll(): Observable<Service[]>{
    return this.httpClient.get<Service[]>("${this.API_Spring}");
  }

  findById(id: String): Observable<Service>{
    return this.httpClient.get<any>(`${this.API_Spring}/getId/${id}`);
  }

  findByName(name: String): Observable<Service>{
    return this.httpClient.get<any>(`${this.API_Spring}/getName/${name}`);
  }

  delete(service: Service): Observable<any>{
    return this.httpClient.delete<any>(`${this.API_Spring}/${service.serviceID}`);
  }
}
