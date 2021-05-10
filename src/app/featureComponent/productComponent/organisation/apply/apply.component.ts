import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms'
import { AuthServiceService } from 'src/app/services/authService/auth-service.service';
import { OrganisationService } from 'src/app/services/Organisation/organisation.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(private fb:FormBuilder,private user:AuthServiceService,private orgServe:OrganisationService) { }
  application:FormGroup;
  id:any=localStorage.getItem('id');
  showTrue:boolean=false;
  showFalse:boolean=false;
  ngOnInit(): void {
    this.user.getUserProfile(localStorage.getItem('id')).subscribe(res=>{
      let name=res.results.firstname+" "+res.results.lastname;
      this.application=this.fb.group({
        name:[name,Validators.required],
        organisation:[localStorage.getItem('orgname'),Validators.required],
        cvlink:['',Validators.required],
        phone:[res.results.phone,Validators.required],
        email:[res.results.email,Validators.required],
        gender:[res.results.gender,Validators.required],
        managerid:[localStorage.getItem('managerid')],
        userid:[this.id],
        status:['pending']
      })
    })

  }

  onSubmit()
  {
    
    this.orgServe.apply(this.application.value).subscribe(res=>{
      if(res.status==200)
      {
        
        this.showTrue=true;
        const button = document.querySelectorAll('button');
        button[1].disabled=true;
        localStorage.removeItem('orgname');
        localStorage.removeItem('managerid');
      }else
      {
        this.showFalse=true;
      }

    },err=>{
      console.log(err);
    })
  }

}
