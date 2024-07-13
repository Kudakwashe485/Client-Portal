import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenApiModel } from '../models/token-api.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'https://localhost:49991/api/Client/';
  private userPayload:any;
  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodedToken();
   }
    
  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}Register`, userObj)
  }

  signIn(loginObj : any){
    return this.http.post<any>(`${this.baseUrl}Authenticate`,loginObj)
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }
  storeRefreshToken(tokenValue: string){
    localStorage.setItem('refreshToken', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  
  getRefreshToken(){
    return localStorage.getItem('refreshToken')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  decodedToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken();
  
    if (!token) {
      console.error('Token is missing or invalid'); 
      return null;
    }
  
    console.log('Token:', token); 
    try {
      return jwtHelper.decodeToken(token);
    } catch (error) {
      console.error('Error decoding token:', error); 
      return null; 
    }
  }
  
  //Username
  getfullNameFromToken(){
    if(this.userPayload)
    return this.userPayload.name;
    }

    //Firstname
    getNameFromToken(){
      if(this.userPayload)
      return this.userPayload.given_name;
    }

    //Latsname
   getLastNameFromToken(){
    if(this.userPayload)
    return this.userPayload.family_name;
  }

    //PhoneNumber
    getPhoneFromToken(){
      if(this.userPayload)
      return this.userPayload.winaccountname;
    }

   //Address
  getAddressFromToken(){
    if(this.userPayload)
    return this.userPayload.actort;
    }

     //Email
    getEmailFromToken(){
      if(this.userPayload)
      return this.userPayload.email;
    }

    //Role
  getRoleFromToken(){
    if(this.userPayload)
    return this.userPayload.role;
  }

      //UserId
  getUserIdFromToken(){
    if(this.userPayload)
    return this.userPayload.nameid;
  }

  renewToken(tokenApi : TokenApiModel){
    return this.http.post<any>(`${this.baseUrl}Refresh`, tokenApi)
  }


}
