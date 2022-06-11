import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm = new FormGroup({
    username:new FormControl('pablo'),
    password: new FormControl('******'),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
        city: new FormControl('paris'),
        state: new FormControl('ile de paris'),
        postalCode:new FormControl('69000')
    })
  });
  constructor() { }

  ngOnInit(): void {
  }

  

}
