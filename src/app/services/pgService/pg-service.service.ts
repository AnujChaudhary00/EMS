import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../../environments/enviroment.dev';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PgServiceService {

  public grivence$: BehaviorSubject<number>= new BehaviorSubject(0);

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient, public router: Router) { }

  getTicketCount()
  {
     this.httpClient.get<any>(`${environment.TICKET_BASE_URL}/${environment.TICKET.GET_TICKET}/`+localStorage.getItem('id')).subscribe(res=>{
       this.grivence$.next(res.count);
     },error=>{
       console.log(error);
     });
  }

  updateTicket()
  {
    return this.httpClient.get<any>(`${environment.TICKET_BASE_URL}/${environment.TICKET.UPDATE_TICKET}/`+localStorage.getItem('id'));
  }
  
  AddEvent(data) {
    return this.httpClient.post<any>(`${environment.EVENT_BASE_URL}/${environment.EVENT.CREATE_EVENT}`, data);
  }

  getEventDetail(id: any): Observable<any> {
    return this.httpClient.get(`${environment.EVENT_BASE_URL}/${environment.EVENT.GET_EVENT_DETAIL}/${id}`);
  }
  getEvent(id: any): Observable<any> {
    return this.httpClient.get(`${environment.EVENT_BASE_URL}/${environment.EVENT.GET_EVENT}/${id}`);
  }

  getAllEvent(): Observable<any> {
    return this.httpClient.get(`${environment.EVENT_BASE_URL}/${environment.EVENT.GET_ALL_EVENT}`);
  }

  deleteEvent(id: any): Observable<any> {
    return this.httpClient.delete(`${environment.EVENT_BASE_URL}/${environment.EVENT.DELETE_EVENT}/${id}`);
  } 

  updateEvent(id,data)
  {
    console.log(id);
    return this.httpClient.put<any>(`${environment.EVENT_BASE_URL}/${environment.EVENT.UPDATE_EVENT}/`+id,data);
  }

  searchEvent(data)
  {
    return this.httpClient.get<any>(`${environment.EVENT_BASE_URL}/${environment.EVENT.EVENT_BY_TYPE}/`+data);
  }


  createTicket(data:any,id)
  {
    console.log(data);
    return this.httpClient.post<any>(`${environment.TICKET_BASE_URL}/${environment.TICKET.CREATE_TICKET}/`+id,data);
  }

  getTicket(ownerid)
  {
    return this.httpClient.get<any>(`${environment.TICKET_BASE_URL}/${environment.TICKET.GET_TICKET}/`+ownerid);
  }

  getMyTicket(id)
  {
    return this.httpClient.get<any>(`${environment.TICKET_BASE_URL}/${environment.TICKET.MY_TICKET}/`+id);
  }

}
