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

  GetPost(url,val,email){
    return this.http.get(url, {params: {post: val, email:email, type: 'getPost'}}).pipe(
      map(results => {
        console.log("Post data",results);
        return results["post"];
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

  updateProfile(url,user_email,user_name, first_name, last_name, bio, file): Observable<any> {
    let postData = new FormData();
    postData.append('type', 'updateProfile')
    postData.append('email', user_email);
    postData.append('user_name', user_name);
    postData.append('first_name', first_name);
    postData.append('last_name', last_name);
    postData.append('bio', bio);
    postData.append('file', file);
    return this.http.post(url, postData).pipe(
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

  Repost(url,user_email,post_id): Observable<any> {
    return this.http.get(url, {params: {type: 'repost', email: user_email,post:post_id}}).pipe(
      map(results => {
        console.log("Repost",results);
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


  Upload(url,user_email,file, description,genre,playlisted): Observable<any> {
    let postData = new FormData();
    postData.append('file', file);
    postData.append('type', 'upload');
    postData.append('email', user_email);
    postData.append('description', description);
    postData.append('genre', genre);
    postData.append('playlisted', playlisted);
    return this.http.post(url, postData).pipe(
      map(results => {
        console.log("Results",results);
        return results["newly created post_id"];
      })
    );
  }


  Login(url,user_email,password): Observable<any> {
    return this.http.get(url, {params: {type: 'login', email: user_email,password:password}}).pipe(
      map(results => {
        console.log("Results",results);
        return results;
      })
    );
  }


  deletePost(url,post_id){
    return this.http.get(url, {params: {type: 'deletePost', id: post_id}}).pipe(
      map(results => {
        console.log("Results",results);
        return results;
      })
    );
  }


  getUserFeed(url, username,email){
    return this.http.get(url, {params: {type: 'getUserFeed', username:username, "email":email}}).pipe(
      map(results => {
        console.log("Results",results);
        return results["Response"];
      })
    );
  }


  //notifications
  registerDevice(url,user_email,user_id){
    return this.http.get(url, {params: {type: 'registerDevice', email: user_email,user_id:user_id}}).pipe(
      map(results => {
        console.log("Results",results);
        return results;
      })
    );
  }


  sendMessageNotification(url,to,sender,message){
    return this.http.get(url, {params: {type: 'sendMessageNotif', to:to,sender:sender,message:message}}).pipe(
      map(results => {
        console.log("Results",results);
        return results;
      })
    );
  }

  searchPage(url){
    return this.http.get(url, {params: {type: 'searchPage'}}).pipe(
      map(results => {
        console.log("Results",results);
        return results["Response"];
      })
    );
  }


  UploadCoverImage(url,user_email,file){
    let postData = new FormData();
    postData.append('file', file);
    postData.append('type', 'uploadCover');
    postData.append('email', user_email);
    return this.http.post(url, postData).pipe(
      map(results => {
        console.log("Results",results);
        return results;
      })
    );
  }
  



}
