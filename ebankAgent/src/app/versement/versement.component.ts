import { Component, OnInit } from '@angular/core';
import { Agent } from '../model/Agent';
import { Compte } from '../model/Compte';
import { Operation } from '../model/operation';


@Component({
  selector: 'app-versement',
  templateUrl: './versement.component.html',
  styleUrls: ['./versement.component.css']
})
export class VersementComponent implements OnInit {
  newOperation: Operation
  _compte: Compte
  _agent: Agent
  constructor() { }

  ngOnInit() {
  }

}
