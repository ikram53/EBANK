import { Component, OnInit } from '@angular/core';
import { Agent } from '../model/Agent';
import { Compte } from '../model/Compte';
import { Operation } from '../model/operation';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
  newOperation: Operation
  _compteSource: Compte
  _compteDestination: Compte
  _agent: Agent
  constructor() { }

  ngOnInit() {
  }

}
