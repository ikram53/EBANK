import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { Compte } from '../model/Compte';
import { Agent } from '../model/Agent';


@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent implements OnInit {
  client: Client = new Client();
  compte: Compte = new Compte();
  nouveauCompte: Compte;
  currentAgent: Agent;
  nextS1: boolean = false;
  nextS2: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
