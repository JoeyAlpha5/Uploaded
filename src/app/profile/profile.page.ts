import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userProfile: Observable<any>;
  Playlists: Observable<any>;
  images_url: string  =  "http://res.cloudinary.com/uploaded/image/upload/v1567818053/";
  video_url: string  =  "http://res.cloudinary.com/uploaded/video/upload/v1567818053/";
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  //profile_url = 'http://127.0.0.1:8000/users/users'
  constructor(private requests: RequestsService,private statusBar: StatusBar,private route: Router,private storage: Storage ) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();    
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    // Put here the code you want to execute
    this.storage.get('mail').then((mail) => {
      console.log('Your email is', mail);
      // var profile_url =  'https://uploaded.herokuapp.com/users/users';
      if(mail == undefined){
        this.route.navigate(['']);
      }else{
        this.storage.get("user_id").then((val) =>{
          this.userProfile = this.requests.getUserProfile(this.profile_url,val,mail);
          // this.userProfile.subscribe(profile => {
          //   console.log("profile", profile);
          //   this.renderProfile(profile);
          // });
          console.log("profile to get", val);
          console.log("user's email",mail);
          this.storage.get('userProfileEmail').then((userProfileEmail) => {
            this.Playlists = this.requests.getProfilePlaylists(this.profile_url, userProfileEmail);

          });
          
        });
      }
    });
  }


  Follow(user_id){
    this.storage.get('mail').then((mail) => {
      this.requests.Follow(this.profile_url,user_id,mail).subscribe(x => {
        this.ionViewDidEnter();
      });
    });    
  }


  Message(first_name, last_name,username,id){
    console.log(first_name, last_name,id)
    this.storage.set("receiverName", first_name);
    this.storage.set("receiverSName", last_name);
    this.storage.set("receiverUsername", username);
    this.storage.set("receiverID", id);
    this.route.navigate(['/home/tabs/messaging']);
  }

  viewPost(post_id){
    this.storage.set("post", post_id);
    this.route.navigate(['/home/tabs/postView']);

  }

}
