import { Component } from '@angular/core';
import { User } from './user';
import { EnrollementService } from './enrollement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'tdf';

  topics = ['Angular','React', 'Vue'];

  userModel =  {name:'',email: 'rob@email.com',phone: 99888999,topic:"default",timePreference:'morning',subscribe:true};
  
  topHasError=true;

  submitted=false;

  errorMessage = '';

  constructor(private  rService:EnrollementService){
    
  }
  validateTopic(value:any){
      if(value=='default'){
        this.topHasError=true;
      }else{
        this.topHasError=false;
      }
  }
  onSubmit(){
    //console.log(this.userModel);
    this.submitted=true;
    
    return  this.rService.enroll(this.userModel) // new format for subscription
   .subscribe(
     {
       next:x => console.log("the next value is",x),
       error:err=>{this.errorMessage=err},
       complete:()=>console.log("the call has completed")

     }
   )
  }
}
