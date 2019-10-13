import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users?page=1');
  }
}

//   return [
//     {
//       name: "Christian",
//       age: 21,
//       gender: "male",
//       registered: true
//     },
//     {
//       name: "Evan",
//       age: 22,
//       gender: "male",
//       registered: true
//     },
//     {
//       name: "Blake",
//       age: 25,
//       gender: "male",
//       registered: false
//     }
//   ]
