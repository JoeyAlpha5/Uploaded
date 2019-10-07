import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Storage } from '@ionic/storage';
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
  constructor(private requests: RequestsService,private route: Router,private storage: Storage ) {}

  ngOnInit() {
  }

  ionViewDidEnter() {

    // Put here the code you want to execute
    this.storage.get('userProfileEmail').then((mail) => {
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
          this.Playlists = this.requests.getProfilePlaylists(this.profile_url, mail);

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

}
