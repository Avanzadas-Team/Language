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
  private actualRest: string = '1';
  private restURL: string = "https://languagesrest" + this.actualRest + "proy2.azurewebsites.net/";
  private attempts: number = 0;


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

  GetAttemptNo() {
    if (this.attempts <= 4) {
      return true;
    }
    else {
      this.attempts = 0;
      return false
    }
  }

  GetUsers() { // gets all user from the DB, returns JSON Objects with all users.
    return this.http.get(this.restURL + 'users/All').pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.GetUsers();
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    )
  }

  registerUser(user) {
    return this.http.post(this.restURL + "createuser", user).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.registerUser(user);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
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
          if (this.GetAttemptNo()) {
            var retry = this.GetUsersPerCountry();
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
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
          if (this.GetAttemptNo()) {
            var retry = this.GetUsersPerTLang();
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    )
  }

  GetUsersbyUsername(json) {
    return this.http.post(this.restURL + 'users/username', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.GetUsersbyUsername(json);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    )
  }

  PostUserUpdate(json) {
    return this.http.post(this.restURL + 'users/update', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.PostUserUpdate(json);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
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
          if (this.GetAttemptNo()) {
            var retry = this.GetUsersPerLLang();
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    )
  }
  getLanguagesEnsByUser(id) {
    return this.http.get(this.restURL + "filter/languagesens/" + id).pipe(
      catchError((err) => {
        console.log('error caught in service...');
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.getLanguagesEnsByUser(id);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    );
  }
  getLanguagesAprByUser(id) {
    return this.http.get(this.restURL + "filter/languagesapr/" + id).pipe(
      catchError((err) => {
        console.log('error caught in service...');
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.getLanguagesAprByUser(id);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    );
  }

  login(info) {
    return this.http.post(this.restURL + 'login', info).pipe(
      catchError((err) => {
        console.log('error caught in service...');
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.login(info);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    );
  }
  getUsrbyToTeach(json) {
    return this.http.post(this.restURL + 'filter/one', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.getUsrbyToTeach(json);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    )
  }

  getSecondFilter(json) {
    return this.http.post(this.restURL + 'filter/two', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.getSecondFilter(json);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    )
  }

  getThirdFilter(json) {
    return this.http.post(this.restURL + 'filter/three', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.getThirdFilter(json);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    )
  }

  getFourthFilter(json) {
    return this.http.post(this.restURL + 'filter/fourth', json).pipe(
      catchError((err) => {
        console.log('error caught in service...')
        if (err) {
          console.error('Attempting connection with another node...');
          this.NextURL();
          if (this.GetAttemptNo()) {
            var retry = this.getFourthFilter(json);
            this.attempts++;
            return retry
          }
          else {
            console.log('Could not establish connection to server');
            console.log(err);
          }
        }
      })
    )
  }
}
