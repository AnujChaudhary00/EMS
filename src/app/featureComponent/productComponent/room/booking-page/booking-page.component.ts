import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantServiceService } from 'src/app/services/tenantService/tenant-service.service';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
import {PgServiceService} from '../../../../services/pgService/pg-service.service';
@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  event:any;
  userdetail:any;
  constructor(private route:Router,public eventserve:PgServiceService, private audienceServe:TenantServiceService,public user:UserServiceService ) { }
  isChecked:boolean=false;
  ngOnInit(): void {
    this.eventserve.getEventDetail(localStorage.getItem('eventId')).subscribe(res=>{
      this.event=res.result;
    });

    this.user.getUserProfile(localStorage.getItem('id')).subscribe(res=>{
      this.userdetail=res.results;
    })
  }

    onSubmit()
    {
      console.log(this.event)
      let registeredObj=
      {
       eventid:localStorage.getItem('eventId'),
       eventname:this.event.eventname,
       email:this.userdetail.email,
       phone:this.userdetail.phone,
       name:`${this.userdetail.firstname} ${this.userdetail.lastname}`,
       fee:this.event.fee,
       managerid:this.event.managerid,
       gender:this.userdetail.gender 
      }

      this.audienceServe.bookEvent(registeredObj).subscribe(res=>{
        console.log(res);
        if(res.status==304){
          alert("You Have registered this event already")
        }
        else{
        localStorage.removeItem('eventId');
        alert("success");
        this.route.navigate(['/student-dashboard/my-account']);
        }
      });
    }


}
