import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from 'angular-calendar';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  viewDate: Date = new Date();
  events: CalendarEvent[]=[];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    console.log(content)
    this.modalService.open(content);
  }

  myMeeting(meetingModal){
    console.log("*****************************");

    /*this.modalService.open(meetingModal, { size: 'lg' });*/
  }

}
