import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 user =[{userName:'admin', password:'1234'},{userName:'test', password:'1234'} ]
 isLogginedTrue = false;
 isAdmin = false;
 username= '';
  constructor() { }

  public isLoginedAdmin(userName: string, password: string){
    if (this.user.map(obj => obj.userName).includes(userName) && this.user.map(obj => obj.password).includes(password)){
       this.isLogginedTrue = true;
       this.isAdmin = true;
       this.username = userName;

    } else {
      this.isLogginedTrue = false;
      this.isAdmin = false;
    }

  }

}
