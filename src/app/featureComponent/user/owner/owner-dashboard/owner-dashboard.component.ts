import { Component, OnInit } from '@angular/core';
import {PgServiceService} from '../../../../services/pgService/pg-service.service';
import {TenantServiceService} from '../../../../services/tenantService/tenant-service.service';


@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {

  constructor(public eventserve:PgServiceService, public participantServe:TenantServiceService) { }

  eventCount:Number=0;
  participantCount:Number=0;
  grivenceCount:any;
  ngOnInit(): void {

    this.eventserve.getEvent(localStorage.getItem('id')).subscribe(res=>{
      this.eventCount=res.count;
      console.log(res);
    });

   this.eventserve.grivence$.subscribe(res=>{
    this.grivenceCount =res;
   });


    this.participantServe.getMyParticipant(localStorage.getItem('id')).subscribe(res=>{
      this.participantCount=res.count;
    });

  }
  showDashboard:boolean=true;

    donShow()
    {
      this.showDashboard=false;
    }

    donShowNo()
    {
      this.showDashboard=true;
    }
}
