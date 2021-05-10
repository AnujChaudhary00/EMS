import { Component, OnInit } from '@angular/core';
import {PgServiceService} from '../../../../services/pgService/pg-service.service'
import { FormBuilder, Validators, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pglist',
  templateUrl: './pglist.component.html',
  styleUrls: ['./pglist.component.css']
})
export class PglistComponent implements OnInit {

  constructor(private eventServe:PgServiceService,private fb: FormBuilder) { }
  eventList:any
  updateform:FormGroup;
  show:boolean=false;
  ngOnInit(): void {

    this.updateform = this.fb.group(
      {
        eventname:['', Validators.required],
        eventheadname:['', Validators.required],
        organisation:[''],
        date:['', Validators.required],
        location:['',Validators.required],
        discription:['', Validators.required],
        eventType:['', Validators.required],
        fee:['', [Validators.required,Validators.pattern("[0-9]{2,5}$")]],
        managerid:[''] 
      }
    );

    this.eventServe.getEvent(localStorage.getItem('id')).subscribe(res=>{
      if(res.status==200)
      {
        console.log(res.result);
        this.eventList=res.result;
        
      }else{
        console.log(res.message);
      }
    },err=>{
      console.log(err);
    })

  }

  formAppear(id)
  {
    console.log(id);
    if(this.show==false){
    this.show=true;
    }else{
      this.show=false;
    }
    this.showData(id);

  }

  id:any;

  showData(id)
  {
    this.id=id;
    this.eventServe.getEventDetail(id).subscribe(res=>{
      this.updateform.value.eventname=res.result.eventname;
      this.updateform.value.eventheadname=res.result.eventheadname;
      this.updateform.value.organisation=res.result.organisation;
      this.updateform.value.date=res.result.date;
      this.updateform.value.location=res.result.location;
      this.updateform.value.discription=res.result.discription;
      this.updateform.value.eventType=res.result.eventType;
      this.updateform.value.fee=res.result.fee;
      this.updateform.value.managerid=res.result.managerid;

    },err=>{
      console.log(err);
    })
  }

  updateEvent()
  {
  this.updateform.value.managerid=localStorage.getItem('id');
  console.log(this.updateform.value.managerid);
    if(this.id!=null){
    this.eventServe.updateEvent(this.id,this.updateform.value).subscribe(res=>{
      if(res.status==200)
      {
        alert("success");
        this.show=false;
        location.reload();
      }
    },err=>{
      console.log(err);
    })
  }
  }

  deleteEvent(id)
  {
    this.eventServe.deleteEvent(id).subscribe(res=>{
      if(res.status==200)
      {
        alert("successfully deleted");
        location.reload();
      }
    },err=>{
      console.log(err);
    })
  }

}
