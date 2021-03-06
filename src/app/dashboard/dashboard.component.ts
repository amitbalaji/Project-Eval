import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 public userLogged: string;
 customerFromUser;
  customer: string;
  constructor(private auth: AuthserviceService) {
    if(this.auth.isAdmin)[
      this.userLogged = this.auth.username
    ]
   }

  ngOnInit(): void {
     this.customerFromUser = this.auth.customerFromObject[0];
     this.customer = this.auth.customerNormalFromService;
  }


}
