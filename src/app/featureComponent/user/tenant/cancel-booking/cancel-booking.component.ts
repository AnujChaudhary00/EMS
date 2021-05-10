import { Component, OnInit } from '@angular/core';
import { OrganisationService } from 'src/app/services/Organisation/organisation.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  constructor(private orgServe:OrganisationService) { }
  applicationList:any;
  ngOnInit(): void {
    this.orgServe.myApplication().subscribe(res=>{
      if(res.status==500)
      {
        alert("error fetching data");
      }
        this.applicationList=res.result;
    })
  }

}
