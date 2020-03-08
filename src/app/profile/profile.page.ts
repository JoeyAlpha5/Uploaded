import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../tabs/tabs.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userProfile: Observable<any>;
  Playlists: Observable<any>;
  images_url: string  =  "https://res.cloudinary.com/uploaded/image/upload/v1567818053/";
  video_url: string  =  "https://res.cloudinary.com/uploaded/video/upload/v1567818053/";
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  following: boolean;

  //profile_url = 'http://127.0.0.1:8000/users/users'
  constructor(private iab: InAppBrowser,private tabs: TabsPage,private requests: RequestsService,private statusBar: StatusBar,private route: Router,private storage: Storage ) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();  
    this.tabs.bgColor = '#000000';  
  }

  ngOnInit() {
  }


  follow(username,num){
    console.log(username, num);
    this.storage.set("profileUserName", username);
    this.storage.set("followingNum",num);
    this.route.navigate(['/home/tabs/following']);


  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(true);
    this.tabs.bgColor = '#000000';
    this.tabs.bottom = true;
    // Put here the code you want to execute
    this.storage.get('mail').then((mail) => {
      console.log('Your email is', mail);
      // var profile_url =  'https://uploaded.herokuapp.com/users/users';
      if(mail == undefined){
        this.route.navigate(['login']);
      }else{
        this.storage.get("user_id").then((val) =>{
          this.userProfile = this.requests.getUserProfile(this.profile_url,val,mail);
          this.userProfile.subscribe(u=>{
            console.log(u);
            this.following = u[0].already_following;
          });
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


  Follow(user_id,fl){
    this.storage.get('mail').then((mail) => {
      this.requests.Follow(this.profile_url,user_id,mail).subscribe(x => {
        console.log(fl);
        if(x == true){
          this.following = true
        }else{
          this.following = false;
        }
        // this.ionViewDidEnter();
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


  onDrag(){
    console.log("dragged");
  }


  openWebsite(website){
    console.log(website);
    const browser = this.iab.create(website,'_system');
    browser.show()
  }

  viewUserFeed(username){
    this.storage.set("uerFeedUsername", username);
    this.route.navigate(['/home/tabs/userfeed']);

  }

}
