import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {


private fullName$ = new BehaviorSubject<string>("");

 private role$ = new BehaviorSubject<string>("");

 private firstName$ = new BehaviorSubject<string>("");

 private lastName$ = new BehaviorSubject<string>("");

 private Email$ = new BehaviorSubject<string>("");

 private phoneNumber$ = new BehaviorSubject<string>("");

 private physicalAddress$ = new BehaviorSubject<string>("");

 private UserId$ = new BehaviorSubject<number>(0);


constructor() { }

  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string){
    this.role$.next(role);
  }

  //Username
  public getFullNameFromStore(){
    return this.fullName$.asObservable();
  }

  public setFullNameForStore(fullname:string){
    this.fullName$.next(fullname)
  }

  //FirstName
    public getNameFromStore(){
      return this.firstName$.asObservable();
    }

    public setNameForStore(firstName: string) {
      this.firstName$.next(firstName);
    }

      //LastName
    public getLastNameFromStore(){
      return this.firstName$.asObservable();
    }

    public setLastNameForStore(lastName: string) {
      this.lastName$.next(lastName);
    }

      //Email
    public getEmailFromStore(){
      return this.Email$.asObservable();
    }

    public setEmailForStore(email: string) {
      this.Email$.next(email);
    }

      //Phone Number
    public getPhoneFromStore(){
      return this.phoneNumber$.asObservable();
    }

    public setPhoneForStore(phoneNumber: string) {
      this.phoneNumber$.next(phoneNumber);
    }

      //Physical Address
    public getAddressFromStore(){
      return this.physicalAddress$.asObservable();
    }

    public setAddressForStore(address: string) {
      this.physicalAddress$.next(address);
    }
      //Physical Address
    public getUserIdFromStore(){
      return this.UserId$.asObservable();
    }

    public setUserIdForStore(nameid: number) {
      this.UserId$.next(nameid);
    } 
}
