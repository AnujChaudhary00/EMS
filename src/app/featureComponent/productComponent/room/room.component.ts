import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {PgServiceService} from '../../../services/pgService/pg-service.service'
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm:NgForm

  constructor(private eventServe:PgServiceService,private route:Router, private r:ActivatedRoute) { }
  eventList;
  eventCount=0;
  mainImage;
  ngAfterViewInit(): void {


    this.eventServe.getAllEvent().subscribe(res=>{
      this.eventList=res.result;
      this.eventCount=res.recordCount;
    })

    const formValue=this.searchForm.valueChanges;
    formValue.pipe(
      filter(()=>this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(700),
      distinctUntilChanged(),
      switchMap(data=>this.eventServe.searchEvent(data))
    ).subscribe(res=>{
      this.eventList=res.result;
      this.eventCount=res.count;
      console.log(res);
    },err=>{
      console.log(err);
    });

//     const searchFocus = document.getElementById('search-focus');
// const keys = [
//   { keyCode: 'AltLeft', isTriggered: false },
//   { keyCode: 'ControlLeft', isTriggered: false },
// ];

// window.addEventListener('keydown', (e) => {
//   keys.forEach((obj) => {
//     if (obj.keyCode === e.code) {
//       obj.isTriggered = true;
//     }
//   });

//   const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

//   if (shortcutTriggered) {
//     searchFocus.focus();
//   }
// });

// window.addEventListener('keyup', (e) => {
//   keys.forEach((obj) => {
//     if (obj.keyCode === e.code) {
//       obj.isTriggered = false;
//     }
//   });
// });
  }

  register(id)
  {
    this.route.navigate([" /"+id],{ relativeTo: this.r });
  }

}
