import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public loadingController: LoadingController, private requests: RequestsService ) { }

  ngOnInit() {
  }

  
 

  results: Observable<any>;
  Playlists: Observable<any>;

  ionViewDidEnter() {
    // Put here the code you want to execute
    var Email = JSON.parse(localStorage.getItem('email'));
    var Password = localStorage.getItem('password');
    var profile_url =  'https://uploaded.herokuapp.com/users/users';
    if(Email == null && Password == null){
      window.location.href = '';
      return;
    }else{
      this.results =  this.requests.getProfile(profile_url, Email); 
      // this.results.subscribe(profile => {
      //   console.log("profile", profile);
      //   this.renderProfile(profile);

      // });

      this.Playlists = this.requests.getProfilePlaylists(profile_url, Email); 
    }
  }


  showSettings(){
    $("#Settings").show();
    $("#closeMenu").show();
  }

  closeMenu(){
    $("#Settings").hide();
    $("#closeMenu").hide();
  }

  editProfile(){
    $("#Settings").hide();
    $("#editProfile").show();
  }

  updateProfile(){
    let user_name = $("#user_name").val();
    let first_name = $("#first_name").val();
    let last_name = $("#last_name").val();
    let bio = $("#bioInput").val();

    var profile_url =  'https://uploaded.herokuapp.com/users/users';
    var Email = JSON.parse(localStorage.getItem('email'));
    let update = this.requests.updateProfile(profile_url, Email, user_name, first_name, last_name, bio); 

    update.subscribe(x => console.log(x) );
    this.ionViewDidEnter();

  }


  //render user's profile
  // renderProfile(profile){
  //     $("#profileName").text(profile.first_name + " "+ profile.last_name);
  //     $("#username").text("@"+profile.username);
  //     $("#Posts").text(profile.total_posts + " Uploaded playlists");
  //     $("#Followers").text(profile.followers);
  //     $("#Followings").text(profile.following);
  //     $("#bio").text(profile.bio);
  //     $("#dp").css('background', 'url('+this.images_url+profile.image+'.jpg)');
  //     $("#dp").css('background-size', 'cover');

  // }

  logout(){
    localStorage.clear();
    this.ionViewDidEnter();
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message: 'Uploading '+message+', Please wait...',
      duration: 10000
    });
    await loading.present();

   // const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

}
