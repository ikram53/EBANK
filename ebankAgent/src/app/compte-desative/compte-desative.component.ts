import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/Compte';

@Component({
  selector: 'app-compte-desative',
  templateUrl: './compte-desative.component.html',
  styleUrls: ['./compte-desative.component.css']
})
export class CompteDesativeComponent implements OnInit {
  pageCompte:Array<Compte>;
  motCle:string="";
  activationReussite:any;
  constructor() { }

  ngOnInit() {
  }

}
