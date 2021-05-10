import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private fb:FormBuilder, private authServe:AuthServiceService) { }
  application:FormGroup;

  ngOnInit(): void {
    this.application=this.fb.group({
      name:['',Validators.required],
      email:['', Validators.pattern("^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$")],
      query:['',Validators.required],
    })
  }
showSuccess:boolean=false;
showFail:boolean=false;
  onSubmit()
  {
    console.log("Error no")
    this.authServe.contactUs(this.application.value).subscribe(res=>{
      if(res.status==200)
      {
        this.showSuccess=true;
      }else
      {
        this.showFail=true;
      }
    })
  }

}
