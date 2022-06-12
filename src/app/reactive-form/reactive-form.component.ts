import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  constructor(private fb :FormBuilder) { }
  // registrationForm = new FormGroup({
  //   username:new FormControl(''),
  //   password: new FormControl('******'),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //       city: new FormControl('paris'),
  //       state: new FormControl('ile de paris'),
  //       postalCode:new FormControl('69000')
  //   })
  // });

  registrationForm = this.fb.group({
    username:['pablo'],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:['paris'],
      state:['ile de france'],
      poastalCode:[''] 
    })
  })
  



  ngOnInit(): void {
  }
  //set the different form values
  loadApiData(){
    //set value is very stricte on form value format. if a field is ommitted an error will be generated
    // this.registrationForm.setValue({
    //   username:'totot',
    //   password:'****',
    //   confirmPassword:'****',
    //   address:{
    //     city:'paris',
    //     state:'test',
    //     postalCode:'12345'
    //   }
    // })
    //patchvalue help provide incomplete form values
    this.registrationForm.patchValue({
      username:'totot',
      password:'****',
      confirmPassword:'****'
    })
    
  }

  clearForm(fGroup:FormGroup){
    fGroup.reset();
  }

  

}
