import { Component , ViewChild} from '@angular/core';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  results: Observable<any>;
  commentsRef$: Observable<any[]>;
  repostsRef$: Observable<any[]>;
  commnentsTab: any;
  commnentsTab2: any;
  postViewsRef$: Observable<any[]>;
  @ViewChild('slider', {static: false}) slide: IonSlides;

  constructor(private tabs: TabsPage,private platform: Platform,public loadingController: LoadingController,private statusBar: StatusBar, public actionSheetController: ActionSheetController, public toastController: ToastController, private requests: RequestsService, private database:AngularFireDatabase,private route: Router,private storage: Storage) {
    this.commentsRef$ = this.database.list("comments").valueChanges();
    this.postViewsRef$ = this.database.list("views").valueChanges();
    // this.commentsRef$ = this.database.list("reposts").valueChanges();
    this.statusBar.overlaysWebView(true);
    this.tabs.bgColor = 'transparent';
    this.displayComments();

  }

    slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    pass: any;
    email: any;


    displayComments(){
      this.commentsRef$.subscribe((val)=>{
        console.log("Comments",val);
        //load comments bottom
        setTimeout(function(){ 
          this.commnentsTab = document.getElementsByClassName("commentBox"); 
          this.commnentsTab = document.getElementsByClassName("commentBox"); 
          //display the last comment added
          for(let x = 0; x < this.commnentsTab.length; x++){
            this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
            console.log("scroll top",this.commnentsTab[x].scrollTop);
            console.log("scroll height",this.commnentsTab[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
          }
          //reset the comments count for each post
          for(let c = 0; c < val.length; c++){
            $("#"+val[c].post+"CommentsCount").text("0");
          }
          //get the number of comments for each post
          for(let c = 0; c < val.length; c++){
            //console.log("this comment belongs to post ", val[c].post);
            let currentTotalComments = parseInt($("#"+val[c].post+"CommentsCount").text());
            currentTotalComments += 1;
            $("#"+val[c].post+"CommentsCount").text(currentTotalComments);

          }


          //
          //commentinput 2
          this.commnentsTab2 = document.getElementsByClassName("scrollableComments"); 
          this.commnentsTab2 = document.getElementsByClassName("scrollableComments"); 
          //display the last comment added
          for(let x = 0; x < this.commnentsTab2.length; x++){
            this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
            console.log("scroll top2",this.commnentsTab2[x].scrollTop);
            console.log("scroll height2",this.commnentsTab2[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
          }




        }, 1000);

      });
    }


    CommentsUp(i){
      console.log("Move comments up");  
      this.tabs.bottom = false; 
      if(this.platform.is("ios")){
        $("."+i+"userInfo").css("margin-bottom","80%");
        $("."+i+"PostData").css("margin-top","-100%");
      }else{
        this.statusBar.overlaysWebView(false);
        $("."+i+"userInfo").css("margin-bottom","0");
      }
      
    }

    CommentsDown(i){
      this.statusBar.overlaysWebView(true);
      this.tabs.bottom = true; 
      console.log("Move comments down");
      if(this.platform.is("ios")){
        $("."+i+"userInfo").css("margin-bottom","100px");
        $("."+i+"PostData").css("margin-top","20%");
      }else{
        $("."+i+"userInfo").css("margin-bottom","100px");
      }
    }


    share(file){
      this.presentActionSheet();
    }

    ionicSlide(){
      this.slide.getActiveIndex().then((val) => { 
        console.log(val);
        this.playVideo(val);
      });

      

    }

    ionViewWillLeave(){
      this.slide.getActiveIndex().then((val) => { 
        console.log("left slide ", val);
        this.pauseVideo(val);
      });
      console.log("Leaving");
    }

    commentAdded(){
      console.log("Comment added");
      //get comments tabs
      this.commnentsTab = document.getElementsByClassName("commentBox");  
      //display the last comment added
      for(let x = 0; x < this.commnentsTab.length; x++){
        this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
        console.log("scroll top",this.commnentsTab[x].scrollTop);
        console.log("scroll height",this.commnentsTab[x].scrollHeight);
        //element.scrollTop = element.scrollHeight;
      }
    }
    
    playVideo(id){
      var video = <HTMLVideoElement> document.getElementById(id+"videobcg");
      this.tabs.bottom = true;
      let CommentsBox =  $(".allComments");
      console.log(CommentsBox);
      //close all comment boxes
      for(let x = 0; x < CommentsBox.length; x++){
          CommentsBox[x].style.display = 'none';
      }

      // this.CommentsUp(id);
      console.log("id", id);

      this.tabs.bottom = true;
      console.log(id);
      console.log("paused",video.paused);
      if(video.paused == true){
        video.play();
        $("."+id+"userInfo").show();
        $("."+id+"PostData").show();

        //add view count


      }else{
        video.pause();
        $("."+id+"userInfo").show();
        $("."+id+"PostData").show();
      }

    }


    pauseVideo(id){
      var video = <HTMLVideoElement> document.getElementById(id+"videobcg");
      console.log(id);
      console.log("paused",video.paused);
      video.pause();

    }

    repost(post_id){
      console.log(post_id);
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      //var profile_url = 'http://127.0.0.1:8000/users/users'
      let repost = this.requests.Repost(profile_url,this.email, post_id);
      repost.subscribe(x =>{
        console.log(x);
        if(x == "Repost exists"){
          this.presentToast("You've already reposted this post");
        }else{
          this.presentToast("Post has been shared to your feed");
          
        }
        
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

    onSwipeUp(user_id, email,i){
      console.log("swipe up");
      console.log(user_id, email);
      this.storage.set("user_id",user_id);
      this.storage.set("userProfileEmail",email);
      this.pauseVideo(i);
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


    like(post_id:any, slideId){
      console.log(post_id);
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      var like =  this.requests.Like(profile_url, this.email, post_id);
      like.subscribe(response =>{
        console.log(response);
        //if false meaning had not been liked, but now liked
        console.log(this.email);
        if(response == false){
          $("#"+post_id+"likeIcon").css("color","#E91E63");
          var likes = JSON.parse($("#"+post_id+"likeCount").text());
          $("#"+post_id+"likeCount").text(likes += 1);
          $("."+slideId+"heartAnimations").show();
          setTimeout( function(){
            $("."+slideId+"heartAnimations").hide();
          }, 500 );
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

    postComment2(post_id){
      var commentMessage = $("#"+post_id+"commentInput2").val();
      var postedBy: any;
      this.storage.get('username').then((val) => {
        // console.log('Your age is', val);
        postedBy = val;
        if(commentMessage != null && commentMessage != ""){
          var comment = {post: post_id,user: postedBy, comment: commentMessage};
          this.database.list("comments").push(comment);
          $("#"+post_id+"commentInput2").val("");
        }
        console.log(commentMessage);
      });
    }

    showAllComments(post_id){
      console.log(post_id);
      this.tabs.bottom = false;
      $("#"+post_id+"allComments").show();
      //commentinput 2
      this.commnentsTab2 = document.getElementsByClassName("scrollableComments"); 
      this.commnentsTab2 = document.getElementsByClassName("scrollableComments"); 
      //display the last comment added
      for(let x = 0; x < this.commnentsTab2.length; x++){
        this.commnentsTab2[x].scrollTop = this.commnentsTab2[x].scrollHeight;
        console.log("scroll top2",this.commnentsTab2[x].scrollTop);
        console.log("scroll height2",this.commnentsTab2[x].scrollHeight);
        //element.scrollTop = element.scrollHeight;
      }

      let totalComments = $("#"+post_id+"CommentsCount").text();
      $("#"+post_id+"totalCOmments").text(totalComments + " Comments");
      console.log("total comments", totalComments);
    }

    
    


    changeIconColors(){
      this.tabs.tab1 = "#fc8700";
      this.tabs.tab2 = "white";
      this.tabs.tab3 = "white";
      this.tabs.tab4 = "white";
      this.tabs.tab5 = "white";
    }


    playFirstVideo(){

    }

    ionViewDidEnter() {
      this.statusBar.overlaysWebView(true);
      this.tabs.bgColor = 'transparent';
      this.displayComments();
      this.playFirstVideo();
      //change icon colors
      this.changeIconColors();
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


    async presentNotificationToast(msg){
      const toast = await this.toastController.create({message: msg.body, duration: 3000});
      toast.present();
    }


    swiped(id,post_id,direction){
      console.log("post", post_id)
      console.log("left");
      let idd = id - 1;
      var video = <HTMLVideoElement> document.getElementById(id+"videobcg");
      console.log(id);
      console.log("paused",video.paused);
      //video.pause();
      if(video.paused == true){
        //video.play();
      }else{
        video.pause();
      }

      console.log(direction);
      if(direction == "left"){
        let current_post_id = $("#"+parseInt(id+1)+"PostViews").text();
        let prev_post_id = $("#"+id+"PostViews").text();
        this.storage.get("current_userID").then((val)=>{
          this.database.list("views/").remove(JSON.stringify(val+current_post_id))
          this.database.list("views/").remove(JSON.stringify(val+prev_post_id))
          this.database.object("views/"+JSON.stringify(val+current_post_id)).set({"user": val, "post_id":current_post_id});
          //display views
          this.postViewsRef$.subscribe((val)=>{
            for(let c = 0; c < val.length; c++){
              $("."+val[c].post_id+"viewCount").text("0");
            }
            for(let v =0; v < val.length; v++){
              let key = Object.keys(val[v])[0];
              console.log(key);
              let post_id =  val[v].post_id;
              console.log(post_id);
              let current_views = parseInt($("."+post_id+"viewCount").text());
              current_views += 1;
              $("."+post_id+"viewCount").text(current_views);
            }
          });
        });
        console.log(current_post_id);
      }else if(direction == "right"){
        let current_post_id = $("#"+idd+"PostViews").text();
        let prev_post_id = $("#"+parseInt(id)+"PostViews").text();
        this.storage.get("current_userID").then((val)=>{
          this.database.list("views/").remove(JSON.stringify(val+current_post_id));
          this.database.list("views/").remove(JSON.stringify(val+prev_post_id));
          this.database.object("views/"+JSON.stringify(val+current_post_id)).set({"user": val, "post_id":current_post_id});
          this.postViewsRef$.subscribe((val)=>{
            for(let c = 0; c < val.length; c++){
              $("."+val[c].post_id+"viewCount").text("0");
            }
            for(let v =0; v < val.length; v++){
              let key = Object.keys(val[v])[0];
              console.log(key);
              let post_id =  val[v].post_id;
              console.log(post_id);
              let current_views = parseInt($("."+post_id+"viewCount").text());
              current_views += 1;
              $("."+post_id+"viewCount").text(current_views);
            }
          });
          
        });
      }
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



    //present share options
    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Share post',
        buttons: [{
          text: 'Facebook',
          role: 'destructive',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Facebook');
          }
        }, {
          text: 'Twitter',
          icon: 'logo-twitter',
          handler: () => {
            console.log('Twitter');
          }
        }, 
        {
          text: 'WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            console.log('WhatsApp');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }
}
