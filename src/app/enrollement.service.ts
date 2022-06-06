import { Injectable } from '@angular/core';
import {User} from './user';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollementService {
  
  url ='';
  constructor(private http:HttpClient) {

   }
   enroll(user:User){
    return this.http.post<any>(this.url,user);
   }
}
