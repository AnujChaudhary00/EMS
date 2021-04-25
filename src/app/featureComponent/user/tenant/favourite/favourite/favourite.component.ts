import { Component, OnInit } from '@angular/core';
import {PgServiceService} from '../../../../../services/pgService/pg-service.service'
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private ticketServe:PgServiceService) { }
  ticket:any
  myTicket:any;
  count:Number=0;
  ngOnInit(): void {

    this.ticketServe.getMyTicket(localStorage.getItem('id')).subscribe(res=>{
      this.myTicket=res.result;
      this.count=res.count;
    })

  }
  create:boolean=false;
  history:boolean=false;
  type:String;
  propid:String;
  discribe:String;
  phonemail:String;
  ownerid:String;
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
    this.ticketServe.createTicket({'type':this.type,'propid':this.propid,'discription':this.discribe,'phonemail':this.phonemail,'ownerid':this.ownerid},userid).subscribe(res=>{
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
