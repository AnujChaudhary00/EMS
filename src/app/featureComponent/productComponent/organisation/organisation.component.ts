import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs/operators';
import { OrganisationService } from 'src/app/services/Organisation/organisation.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {

  @ViewChild('searchForm') searchForm:NgForm;

  constructor(private route:Router, private r:ActivatedRoute,private org:OrganisationService) { }
  orgList;
  orgCount=0;

  ngOnInit(): void {
    this.org.getOrganisationList().subscribe(res=>{
      this.orgList=res.result;
      this.orgCount=res.count;
    });

    const formValue=this.searchForm.valueChanges;
    formValue.pipe(
      filter(()=>this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(700),
      distinctUntilChanged(),
      switchMap(data=>this.org.search(data))
    ).subscribe(res=>{
      this.orgList=res.result;
      this.orgCount=res.count;
    },err=>{
      console.log(err);
    });

  }

  register(id)
  {
    this.route.navigate(["about/"+id],{ relativeTo: this.r });
  }

}
