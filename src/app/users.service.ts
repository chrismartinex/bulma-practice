import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }

  getData (){
    return this._http.get('http://jsonplaceholder.typicode.com/todos/');
  }
}





// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   constructor(private http:HttpClient) { }

//   getData ()
//   {
//     let url = "http://jsonplaceholder.typicode.com/todos/";
//     return this.http.get(url);
//   }
// }



