import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import * as $ from 'jquery';

import {PgServiceService} from '../../../../services/pgService/pg-service.service';

@Component({
  selector: 'app-add-pg',
  templateUrl: './add-pg.component.html',
  styleUrls: ['./add-pg.component.css']
})
export class AddPgComponent implements OnInit {

  constructor(private fb: FormBuilder,private eventServe:PgServiceService,private router:Router) { }
  saveEvent:FormGroup;
  filesToUpload: Array<File> = [];

  ngOnInit(): void {
    
    $(function () {
      $("#datepicker").datepicker();
    });

    this.saveEvent = this.fb.group(
      {
        eventname:['', Validators.required],
        eventheadname:['', Validators.required],
        organisation:['', Validators.required],
        date:['', Validators.required],
        location:['',Validators.required],
        discription:['', Validators.required],
        eventType:['', Validators.required],
        fee:['', [Validators.required,Validators.pattern("[0-9]{2,5}$")]],
        managerid:['']      }
    );


  }


  onSubmit()
  {
    this.saveEvent.value.managerid=localStorage.getItem('id');
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    for(let i =0; i < files.length; i++){
      formData.append("uploads[]", files[i], files[i]['name']);
    }

     formData.append('eventname',this.saveEvent.value.eventname); 
    formData.append('eventheadname',this.saveEvent.value.eventheadname);
    formData.append('organisation',this.saveEvent.value.organisation);
    formData.append('date',this.saveEvent.value.date);
    formData.append('eventType',this.saveEvent.value.eventType);
    formData.append('location',this.saveEvent.value.location);
    formData.append('discription',this.saveEvent.value.discription);
    formData.append('fee',this.saveEvent.value.fee);
    formData.append('managerid',this.saveEvent.value.managerid);

    this.eventServe.AddEvent(formData).subscribe(res=>{
      if(res.status==200)
      {
        alert("Successfully Added");
        // this.router.navigate(['dashboard/pg-List']);
      }
    },err=>{
      console.log(err);
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
}


}
