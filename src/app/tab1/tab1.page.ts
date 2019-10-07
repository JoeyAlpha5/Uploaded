import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  results: Observable<any>;
  commentsRef$: Observable<any[]>;
  repostsRef$: Observable<any[]>;

  constructor(public loadingController: LoadingController, public toastController: ToastController, private requests: RequestsService, private database:AngularFireDatabase,private route: Router,private storage: Storage) {
    this.commentsRef$ = this.database.list("comments").valueChanges();
    // this.commentsRef$ = this.database.list("reposts").valueChanges();

  }

    slideOpts = {
      initialSlide: 1,
      speed: 400
    };

    pass: any;
    email: any;
    
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

    repost(post_id){
      console.log(post_id);
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      //var profile_url = 'http://127.0.0.1:8000/users/users'
      let repost = this.requests.Repost(profile_url,this.email, post_id);
      repost.subscribe(x =>{
        console.log(x);
        this.presentToast("Post has been shared to your feed");
      });

    }

    // images_url: string  =  "http://res.cloudinary.com/uploaded/image/upload/v1567818053/";
    // video_url: string  =  "http://res.cloudinary.com/uploaded/video/upload/v1567818053/";


    async presentToast(message) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000
      });
      toast.present();
    }

    onSwipeUp(user_id, email){
      console.log("swipe up");
      console.log(user_id, email);
      this.storage.set("user_id",user_id);
      this.storage.set("userProfileEmail",email);
      this.route.navigate(['/home/tabs/profile']);
    }

    doRefresh(event){
      console.log(event);
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
        this.ionViewDidEnter();
      }, 2000);
    }


    like(post_id:any){
      console.log(post_id);
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      var like =  this.requests.Like(profile_url, this.email, post_id);
      like.subscribe(response =>{
        console.log(response);
        //if false meaning had not been liked, but now liked
        console.log(this.email);
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
      var postedBy: any;
      this.storage.get('username').then((val) => {
        // console.log('Your age is', val);
        postedBy = val;
        if(commentMessage != null && commentMessage != ""){
          var comment = {post: post_id,user: postedBy, comment: commentMessage};
          this.database.list("comments").push(comment);
          $("#"+post_id+"commentInput").val("");
        }
        console.log(commentMessage);
      });
    }
    
    ionViewDidLoad(){
      console.log("loaded")
    }

    ionViewDidEnter() {
      this.storage.get('mail').then((val) => {
        console.log('Your email is', val);
        this.email = val;
        var profile_url =  'https://uploaded.herokuapp.com/users/users';
        // var profile_url = 'http://127.0.0.1:8000/users/users'
        if(this.email == undefined){
          console.log(this.email);
          this.route.navigate(['/home/tabs/tab1']);
        }else{
            console.log(this.email);
            this.results =  this.requests.getFeed(profile_url, this.email);   
           

        }
      });
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
