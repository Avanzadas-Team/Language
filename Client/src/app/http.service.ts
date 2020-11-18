import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /*If a module needs to implement the http service import the HttpClient module
      import { HttpClientModule } from '@angular/common/http';
    into your module .module.ts imports section under @NgModule 

    Then add the http service using dependency injection by adding it into your component .ts constructor
      constructor(private http: HttpService) { }
    this way you can use the http service methods described in this file under the Http Service Methods section
      this.http.MethodName();
  */

  //Handling request errors https://angular.io/guide/http
  //For http post methods consider using async methods to get the request reponse.
  constructor(private http: HttpClient) { }

  //Http Service URLs
  private devURL: string = "https://localhost:44304/"; //This URL is used for development and testing only. When running test with the devURL make sure the local server is running.
  private rest1URL: string = "https://languagesrest1proy2.azurewebsites.net/";
  private rest2URL: string = "https://languagesrest2proy2.azurewebsites.net/";
  private rest3URL: string = "https://languagesrest3proy2.azurewebsites.net/";

  //Http Service Variables


  //Http Service Methods
  GetUsers() { // gets all user from the DB, returns JSON Objects with all users.
    return this.http.get(this.rest1URL + 'users/All'); //Change the restURl # as needed. 
    //return this.http.get(this.rest2URL + 'users'); 
    //return this.http.get(this.rest3URL + 'users');
  }

  registerUser(user) {
    return this.http.post(this.rest1URL + "createuser", user);
  }

  GetUsersPerCountry() {
    return this.http.get(this.rest1URL + 'upc');
  }

  GetUsersPerTLang() {
    return this.http.get(this.devURL + 'upl/teach');
  }

  GetUsersPerLLang() {
    return this.http.get(this.devURL + 'upl/learn');
  }


}