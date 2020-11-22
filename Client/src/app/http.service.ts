import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

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
  private devURL: string = "https://localhost:5001/"; //This URL is used for development and testing only. When running test with the devURL make sure the local server is running.
  private rest1URL: string = "https://languagesrest1proy2.azurewebsites.net/";
  private actualRest: string = '1';
  private restURL: string = "https://languagesrest" + this.actualRest + "proy2.azurewebsites.net/";


  //Http Service Variables


  //Http Service Methods

  NextURL() { //This function selects and active REST Service
    if (this.actualRest == '1') {
      this.actualRest = '2';
      this.restURL = "https://languagesrest" + this.actualRest + "proy2.azurewebsites.net/";
    }
    else if (this.actualRest == '2') {
      this.actualRest = '3';
      this.restURL = "https://languagesrest" + this.actualRest + "proy2.azurewebsites.net/";

    }
    else {
      this.actualRest = '1'
      this.restURL = "https://languagesrest" + this.actualRest + "proy2.azurewebsites.net/";
    }
  }

  GetUsers() { // gets all user from the DB, returns JSON Objects with all users.
    return this.http.get(this.restURL + 'users/All').pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.GetUsers();
          return retry
        }
      })
    )
  }

  registerUser(user) {
    return this.http.post(this.rest1URL + "createuser", user).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.registerUser(user);
          return retry
        }
      })
    )
  }

  GetUsersPerCountry() {
    return this.http.get(this.restURL + 'upc').pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.GetUsersPerCountry();
          return retry
        }
      })
    )
  }

  GetUsersPerTLang() {
    return this.http.get(this.restURL + 'upl/teach').pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.GetUsersPerTLang();
          return retry
        }
      })
    )
  }

  GetUsersbyUsername(json){
    return this.http.post(this.rest1URL + 'users/username', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.getUsrbyToTeach(json);
          return retry
        }
      })
    )
  }

  PostUserUpdate(json){
    return this.http.post(this.rest1URL + 'users/update', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.getUsrbyToTeach(json);
          return retry
        }
      })
    )
  }

  GetUsersPerLLang() {
    return this.http.get(this.restURL + 'upl/learn').pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.GetUsersPerLLang();
          return retry
        }
      })
    )
  }

  getUsrbyToTeach(json) {
    return this.http.post(this.rest1URL + 'filter/one', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.getUsrbyToTeach(json);
          return retry
        }
      })
    )
  }

  getSecondFilter(json) {
    return this.http.post(this.rest1URL + 'filter/two', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.getSecondFilter(json);
          return retry
        }
      })
    )
  }

  getThirdFilter(json) {
    return this.http.post(this.rest1URL + 'filter/three', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.getThirdFilter(json);
          return retry
        }
      })
    )
  }

  getFourthFilter(json) {
    return this.http.post(this.rest1URL + 'filter/fourth', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          var retry = this.getFourthFilter(json);
          return retry
        }
      })
    )
  }

}
