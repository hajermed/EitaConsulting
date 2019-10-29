import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ContratSociete } from '../_modules/ContratSociete';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class ContratsocieteService {
baseUrl = 'http://localhost:5000/api/';

constructor(private http: HttpClient) {}

getContratSocietes(): Observable<ContratSociete[]> {
  return this.http.get<ContratSociete[]>(this.baseUrl + 'contratsocietes', httpOptions);
}
getContratSociete(ContratSocieteID): Observable<ContratSociete> {
  return this.http.get<ContratSociete>(this.baseUrl + 'contratsocietes/' + ContratSocieteID, httpOptions);
}

}
