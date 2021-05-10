import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {PgServiceService} from '../../../../services/pgService/pg-service.service'

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  constructor(private eventserve:PgServiceService,private router:ActivatedRoute,private route:Router) { }
  id;
  event;
  images:[any]
  selectimg
  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id');
    console.log(this.id);
      this.eventserve.getEventDetail(this.id).subscribe(res=>{
        console.log(res);
        this.event=res.result;
        this.images=res.result.photos;
        this.selectimg=this.images[0];
      },err=>{
        console.log(err);
      })


}

onSelectImg(imgsrc)
{
  this.selectimg=imgsrc;
}


registerPage()
{
  localStorage.setItem('eventId',this.event._id);
  this.route.navigate(["register"],{relativeTo:this.router});
}

}
