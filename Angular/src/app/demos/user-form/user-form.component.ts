import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user = {
    name: 'Toto',
    email: 'toto@titi.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

  addUser(event: any) {
    event.preventDefault();
    console.log(this.user);
  }

}
