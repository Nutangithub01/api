import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/posts";

  users() 
  {
    return this.http.get(this.url);
  }
}
