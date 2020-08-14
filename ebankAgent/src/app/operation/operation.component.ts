import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  public motif:string;
  pageOperation:any=[];
  numOperation:number;
  motCle:string;

  constructor() { }

  ngOnInit() {
  }

}
