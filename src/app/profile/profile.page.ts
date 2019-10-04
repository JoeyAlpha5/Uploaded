import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
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
  constructor(private requests: RequestsService,private route: Router ) {}

  ngOnInit() {
  }

  ionViewDidEnter() {
    var Email = JSON.parse(localStorage.getItem('email'));
    var Password = localStorage.getItem('password');
    if(Email == null && Password == null){
      window.location.href = '';
      return;
    }else{
      let profileToGet = localStorage.getItem("user_id");
      console.log(profileToGet);
      this.userProfile = this.requests.getUserProfile(this.profile_url,profileToGet,Email);
      // this.userProfile.subscribe(profile => {
      //   console.log("profile", profile);
      //   this.renderProfile(profile);
      // });
      let userProfileEmail = localStorage.getItem("userProfileEmail")
      this.Playlists = this.requests.getProfilePlaylists(this.profile_url, userProfileEmail);
    }
  }


  Follow(user_id){
    var Email = JSON.parse(localStorage.getItem('email'));
    this.requests.Follow(this.profile_url,user_id,Email).subscribe(x => {
      this.ionViewDidEnter();
    });
    
  }

  //   renderProfile(profile){
  //     console.log(profile);
  //     $("#profileName").text(profile.first_name + " "+ profile.last_name);
  //     $("#username").text("@"+profile.username);
  //     $("#Posts").text(profile.total_posts + " Uploaded playlists");
  //     $("#Followers").text(profile.followers);
  //     $("#Followings").text(profile.following);
  //     $("#bio").text(profile.bio);
  //     if(profile.image){
  //       $("#dp").css('background', 'url('+this.images_url+profile.image+'.jpg)');
  //     }
  //     $("#dp").css('background-size', 'cover');

  // }

}
