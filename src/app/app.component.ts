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
    this.rService.enroll(this.userModel).subscribe(data=> console.log(data),err=>console.log(err)
    )
  }
}
