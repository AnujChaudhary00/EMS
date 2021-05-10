import { Component, OnInit } from '@angular/core';
import {PgServiceService} from '../../../../../services/pgService/pg-service.service'
import {TenantServiceService} from '../../../../../services/tenantService/tenant-service.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private ticketServe:PgServiceService,private dashServe:TenantServiceService) { }
  ticket:any
  myTicket:any;
  ngOnInit(): void {

    this.ticketServe.getMyTicket(localStorage.getItem('id')).subscribe(res=>{
      this.myTicket=res.result;
    })

  }

  create:boolean=false;
  history:boolean=false;
  type:String;
  eventid:String;
  discribe:String;
  phonemail:String;
  managerid:String;
  createTicket()
  {
    this.create=true;
  }
  back()
  {
    location.reload();  
  }



  historyshow()
  {
    this.history=true;
  }

  onSubmit() {
    let userid=localStorage.getItem('id');
    console.log(this.phonemail);
    this.ticketServe.createTicket({'type':this.type,'eventid':this.eventid,'discription':this.discribe,'phonemail':this.phonemail,'managerid':this.managerid},userid).subscribe(res=>{
      console.log(res);
      if(res.status=200)
      {
        alert("Ticket Submitted Successfully");
        location.reload();
      }
    },err=>{
      console.log(err);
    })
    
  }

}
