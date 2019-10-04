import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  //get profile api
  getProfile(url, email): Observable<any> {
      return this.http.get(url, {params: {email: email, type: 'profile'}}).pipe(
        map(results => {
          console.log("Results",results);
          return results["Response"];
        })
      );
  }


  getProfilePlaylists(url, email): Observable<any>{
    return this.http.get(url, {params: {email: email, type: 'profile'}}).pipe(
      map(results => {
        console.log("Results",results);
        return results["posts"];
      })
    );
  }

  getSearchResults(url, searchTerm, user_email): Observable<any> {
    return this.http.get(url, {params: {Term: searchTerm, type: 'search', email: user_email}}).pipe(
      map(results => {
        console.log("Results",results);
        return results["Response"];
      })
    );
  }

  updateProfile(url,user_email,user_name, first_name, last_name, bio): Observable<any> {
    return this.http.get(url, {params: {type: 'updateProfile', email: user_email, user_name:user_name, first_name:first_name,last_name:last_name,bio:bio}}).pipe(
      map(results => {
        console.log("Results",results);
        return results["Response"];
      })
    );
  }

  getFeed(url,user_email): Observable<any> {
    return this.http.get(url, {params: {type: 'feed', email: user_email}}).pipe(
      map(results => {
        console.log("Results",results);
        return results["Response"];
      })
    );
  }

  getUserProfile(url,user_id,user_email): Observable<any> {
    return this.http.get(url, {params: {type: 'getUser_UD', user_id: user_id, email: user_email} }).pipe(
      map(results => {
        console.log("Results",results);
        return results["Response"];
      })
    );
  }

  Follow(url,user_id,user_email): Observable<any> {
    return this.http.get(url, {params: {type: 'Follow', user_id: user_id, email: user_email} }).pipe(
      map(results => {
        console.log("Results",results);
        return results["Response"];
      })
    );
  }


  Like(url,user_email,post_id): Observable<any> {
    return this.http.get(url, {params: {type: 'like', email: user_email,post:post_id}}).pipe(
      map(results => {
        console.log("Results",results);
        return results["Response"];
      })
    );
  }

}
