import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../../environments/enviroment.dev';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient, public router: Router) { }

  public dashboard:BehaviorSubject<boolean>= new  BehaviorSubject(true);
  id=localStorage.getItem('id');

  bookEvent(data) {
    return this.httpClient.post<any>(`${environment.AUDIENCE_BASE_URL}/${environment.AUDIENCE.BOOK_EVENT}/`+this.id, data);
  }

  myEvents(id: any): Observable<any> {
    return this.httpClient.get(`${environment.AUDIENCE_BASE_URL}/${environment.AUDIENCE.MY_EVENTS}/${this.id}`);
  }

  getMyParticipant(ownerid:any): Observable<any> {
    return this.httpClient.get(`${environment.AUDIENCE_BASE_URL}/${environment.AUDIENCE.LIST_AUDIENCE}/${this.id}`);
  }

}
