import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';

  userli : any;

  constructor(private userdata: UsersDataService) 
  {
    userdata.users().subscribe((data)=>{
      console.log("data",data);
      this.userli= data;
    })
  }
}
