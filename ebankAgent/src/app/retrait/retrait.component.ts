import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/Compte';
import { Agent } from '../model/Agent';
import { Operation } from '../model/operation';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  newOperation: Operation
  _compte: Compte=new Compte();
  _agent: Agent
  constructor() { }

  ngOnInit() {
  }

}
