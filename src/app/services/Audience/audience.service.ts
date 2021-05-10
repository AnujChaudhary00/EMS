import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/enviroment.dev';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AudienceService {

   headers=new HttpHeaders().set('Content-Type','application/json');


  constructor( private httpClient:HttpClient) { }

  

}
