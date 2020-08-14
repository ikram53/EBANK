import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte-active',
  templateUrl: './compte-active.component.html',
  styleUrls: ['./compte-active.component.css']
})
export class CompteActiveComponent implements OnInit {
  public motCle:string="";
  public pageCompte:any=[];
  public page:number=0;
  public desactivationReussite:boolean;
  constructor() { }

  ngOnInit() {
  }

}
