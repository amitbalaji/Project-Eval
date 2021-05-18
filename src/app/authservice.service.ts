import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 user =[{userName:'admin', password:'1234',customer:'Amandeep'},{userName:'test', password:'1234',customer:'Ronit'} ]
 isLogginedTrue = false;
 isAdmin = false;
 customerFromObject= [];
 customerNormalFromService='';
 username= '';
  constructor() { }

  public isLoginedAdmin(userName: string, password: string){
    if (this.user.map(obj => obj.userName).includes(userName) && this.user.map(obj => obj.password).includes(password)){
      this.customerFromObject = this.user.filter(x => x.userName === userName).map(x=> x.customer);
       this.isLogginedTrue = true;
       this.isAdmin = true;
       this.username = userName;

    } else {
      this.isLogginedTrue = false;
      this.isAdmin = false;
    }

  }

}
