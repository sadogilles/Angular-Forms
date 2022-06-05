import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'tdf';

  topics = ['Angular','React', 'Vue'];

  userModel =  {name:'',email: 'rob@email.com',phone: 99888999,topic:"Angular",timePreference:'morning',subscribe:true};
  
}
