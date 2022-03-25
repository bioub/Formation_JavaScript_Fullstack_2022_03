import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {

  prenom = 'Titi';
  prenoms = ['Toto', 'Titi', 'Tata'];

  constructor() { }

  ngOnInit(): void {
  }

}
