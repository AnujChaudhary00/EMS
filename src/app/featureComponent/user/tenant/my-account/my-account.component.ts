import { Component, OnInit } from '@angular/core';
import {TenantServiceService} from '../../../../services/tenantService/tenant-service.service'


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(public participantServe:TenantServiceService) { }
  myevents
  ngOnInit(): void {
    this.participantServe.myEvents(localStorage.getItem('id')).subscribe(res=>{
      this.myevents=res.result;
      console.log(res.result);
    })
  }

}
