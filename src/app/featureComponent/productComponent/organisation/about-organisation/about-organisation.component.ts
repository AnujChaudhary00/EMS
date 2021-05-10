import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { OrganisationService } from 'src/app/services/Organisation/organisation.service';

@Component({
  selector: 'app-about-organisation',
  templateUrl: './about-organisation.component.html',
  styleUrls: ['./about-organisation.component.css']
})
export class AboutOrganisationComponent implements OnInit {

  constructor(private router:Router, private activateRoute:ActivatedRoute,private orgServe:OrganisationService) { }
  id:any;
  orgDetail:any;
  ngOnInit(): void {
   this.id= this.activateRoute.snapshot.paramMap.get('id');
   this.orgServe.getOrgDetail(this.id).subscribe(res=>{
        console.log("organisation detail")
        console.log(res.result);
        this.orgDetail=res.result;
   },err=>{
     console.log(err);
   })
  }

  payment()
  {
    localStorage.setItem('orgname',this.orgDetail.organisationname);
    localStorage.setItem('managerid',this.orgDetail.managerid);
    this.router.navigate(["apply"],{relativeTo:this.activateRoute});
  }

}
