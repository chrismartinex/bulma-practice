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

  getData1 () {
    return this._http.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
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



