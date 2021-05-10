import { Component, OnInit } from '@angular/core';
import {TenantServiceService} from '../../../../services/tenantService/tenant-service.service'

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {

  constructor(private participantServe:TenantServiceService) { }
    myParticipant:any;
    count:any;
  ngOnInit(): void {
    this.participantServe.getMyParticipant(localStorage.getItem('id')).subscribe(res=>{
      this.myParticipant=res.result;
      this.count=res.count;
    })
  }

}
