import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  results: Observable<any>;
  commentsRef$: Observable<any[]>;

  constructor(public loadingController: LoadingController, private requests: RequestsService, private database:AngularFireDatabase,private route: Router ) {
    this.commentsRef$ = this.database.list("comments").valueChanges();

  }

    slideOpts = {
      initialSlide: 1,
      speed: 400
    };


    playVideo(id){
      var video = <HTMLVideoElement> document.getElementById(id+"videobcg");
      console.log(id);
      console.log("paused",video.paused);
      if(video.paused == true){
        video.play();
      }else{
        video.pause();
      }

    }

    // images_url: string  =  "http://res.cloudinary.com/uploaded/image/upload/v1567818053/";
    // video_url: string  =  "http://res.cloudinary.com/uploaded/video/upload/v1567818053/";

    onSwipeUp(user_id, email){
      console.log("swipe up");
      console.log(user_id, email);
      localStorage.setItem("user_id",user_id);
      localStorage.setItem("userProfileEmail",email);
      this.route.navigate(['/home/tabs/profile']);
    }


    like(post_id:any){
      console.log(post_id);
      var Email = JSON.parse(localStorage.getItem('email'));
      var Password = localStorage.getItem('password');
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      var like =  this.requests.Like(profile_url, Email, post_id);
      like.subscribe(response =>{
        console.log(response);
        //if false meaning had not been liked, but now liked
        if(response == false){
          $("#"+post_id+"likeIcon").css("color","#f44336");
          var likes = JSON.parse($("#"+post_id+"likeCount").text());
          $("#"+post_id+"likeCount").text(likes += 1);
        }else{
          $("#"+post_id+"likeIcon").css("color","#ffffff");
          var likes = JSON.parse($("#"+post_id+"likeCount").text());
          $("#"+post_id+"likeCount").text(likes -= 1);
        }
      });
    }


    postComment(post_id){
      var commentMessage = $("#"+post_id+"commentInput").val();
      var postedBy = JSON.parse(localStorage.getItem("username"));
      if(commentMessage != null && commentMessage != ""){
        var comment = {post: post_id,user: postedBy, comment: commentMessage};
        this.database.list("comments").push(comment);
        $("#"+post_id+"commentInput").val("");
      }
      console.log(commentMessage);
    }
  

    ionViewDidEnter() {
      // Put here the code you want to execute
      var Email = JSON.parse(localStorage.getItem('email'));
      var Password = localStorage.getItem('password');
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      if(Email == null && Password == null){
        window.location.href = '';
        return;
      }else{
          this.results =  this.requests.getFeed(profile_url, Email);   
      }

    }

    swiped(){
      console.log("left");
    }

    //loading component
    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 4000
      });
      await loading.present();
  
     // const { role, data } = await loading.onDidDismiss();
  
      console.log('Loading dismissed!');
    }
    //
}
