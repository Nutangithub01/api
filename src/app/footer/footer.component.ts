import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  userli: any;

  constructor(private userdata: UsersDataService) {
    userdata.users().subscribe((data) => {
      console.log("data", data);
      this.userli = data;
    })
  }

  ngOnInit(): void {

  }

}
