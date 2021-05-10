import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/enviroment.dev';
import {Router} from '@angular/router';
import { ReturnStatement } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private httpClient:HttpClient) { }

  id=localStorage.getItem('id');

  getOrganisationList()
  {
   return this.httpClient.get<any>(`${environment.ORGANISATION_BASE_URL}/${environment.ORGANISATION.LIST_ORGANISATION}`)
  }

  addOrganisation(data)
  {
    return this.httpClient.post<any>(`${environment.ORGANISATION_BASE_URL}/${environment.ORGANISATION.ADD_ORGANISATION}/`+this.id,data);
  }

  addLogo(orgid,data)
  {
    return this.httpClient.post<any>(`${environment.ORGANISATION_BASE_URL}/${environment.ORGANISATION.ADD_LOGO}/`+orgid,data);
  }

  updateOrganisation(orgid,data)
  {
    return this.httpClient.put<any>(`${environment.ORGANISATION_BASE_URL}/${environment.ORGANISATION.ADD_LOGO}/`+orgid,data);
  }

  myOrganisation()
  {
    return this.httpClient.get<any>(`${environment.ORGANISATION_BASE_URL}/${environment.ORGANISATION.MY_ORGANISATION}/`+this.id);
  }

  apply(data)
  {
    return this.httpClient.post<any>(`${environment.ORGANISATION_BASE_URL}/${environment.ORGANISATION.APPLY}/`+this.id,data);
  }

  search(data)
  {
    return this.httpClient.get<any>(`${environment.ORGANISATION_BASE_URL}/${environment.ORGANISATION.SEARCH}/`+data);
  }

  getOrgDetail(id)
  {
    return this.httpClient.get<any>(`${environment.ORGANISATION_BASE_URL}/${environment.ORGANISATION.ORGANISATION_DETAIL}/`+id);
  }

  myApplication()
  {
    return this.httpClient.get<any>(`${environment.ORGANISATION_BASE_URL}/${environment.ORGANISATION.MY_APPLICATION}/`+this.id);
  }

}
