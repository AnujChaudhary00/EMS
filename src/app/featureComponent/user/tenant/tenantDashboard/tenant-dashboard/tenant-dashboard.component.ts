import { Component, OnInit } from '@angular/core';
import {PgServiceService} from '../../../../../services/pgService/pg-service.service';
import {TenantServiceService} from '../../../../../services/tenantService/tenant-service.service';


@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.component.html',
  styleUrls: ['./tenant-dashboard.component.css']
})
export class TenantDashboardComponent implements OnInit {

  constructor(public eventserve:PgServiceService, public participantServe:TenantServiceService) { }
  eventCount:Number=0;
  grivenceCount:Number=0;
  showDashboard:boolean;
  ngOnInit(): void {

    this.participantServe.myEvents(localStorage.getItem('id')).subscribe(res=>{
      this.eventCount=res.count;
    })


    this.eventserve.getMyTicket(localStorage.getItem('id')).subscribe(res=>{
      this.grivenceCount=res.count;
    });

    this.participantServe.dashboard.subscribe(res=>{
      this.showDashboard=res;
    })
  }

  donShow()
  {
    this.participantServe.dashboard.next(false);
  }


}
