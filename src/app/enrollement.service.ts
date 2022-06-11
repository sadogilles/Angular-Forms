import { ErrorHandler, Injectable } from '@angular/core';
import {User} from './user';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollementService {
  
  url ='http://localhost:3000/enroll';
  constructor(private http:HttpClient) {

   }

   enroll(user:User){
     console.log('service called');
    return this.http.post<any>(this.url,user).pipe(catchError(this.errorHandler));

    
   }
 
   errorHandler(error:HttpErrorResponse){
    
    return throwError(()=>{console.log(error.message); return error.message; });
   }
}
