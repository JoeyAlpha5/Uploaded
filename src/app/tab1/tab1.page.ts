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
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AlertController } from '@ionic/angular';
import { CacheService } from 'ionic-cache';
// import { NavController } from '@ionic/angular';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Posts = [];
  results: Observable<any[]>;
  posts = [];
  display_firsts: boolean = true;
  // nextPostData: Observable<any>;
  commentsRef$: Observable<any[]>;
  repostsRef$: Observable<any[]>;
  commnentsTab: any;
  commnentsTab2: any;
  postViewsRef$: Observable<any[]>;
  tokenReg: Observable<any>;
  likedComments: Observable<any[]>; 
  videoDuration: Observable<any[]>; 
  taggedUsers: Observable<any[]>; 
  refresh: boolean =  true;
  userInfo: boolean = true;
  current_post_id: any;
  latest_comment: any;
  mute: boolean = true;
  percent: any;
  initial_load: boolean = false;
  circle_circum = 294.159265359;
  tag = false;
  commentInput = "";
  @ViewChild('slider', {static: false}) slide: IonSlides;
 

  constructor(private cache: CacheService,public alertController: AlertController,private socialSharing: SocialSharing,private keyboard: Keyboard,private tabs: TabsPage,private platform: Platform,public loadingController: LoadingController,private statusBar: StatusBar, public actionSheetController: ActionSheetController, public toastController: ToastController, private requests: RequestsService, private database:AngularFireDatabase,private route: Router,private storage: Storage,private oneSignal: OneSignal,/*private screenOrientation: ScreenOrientation*/) {
    this.commentsRef$ = this.cache.loadFromObservable("comments", this.database.list("comments").valueChanges());
    this.postViewsRef$ = this.database.list("views").valueChanges();
    this.likedComments = this.database.list("comment_likes").valueChanges();
    // this.screenOrientation.ORIENTATIONS.PORTRAIT;

    // detect orientation changes
    // this.screenOrientation.onChange().subscribe(
    //   () => {
    //       console.log("Orientation Changed");
    //       //if it is in landscape mode
    //       if(this.screenOrientation.type == "landscape-primary"){
    //         $("#image").css("margin-top","12%");
    //         $("#profileUsername").css("margin-top","15%");
    //         $("#PostData").css("margin-top", "5%");
    //         $("#enterFullScreen").css("margin-left","15px");
    //         $("#videoList").hide();
    //       }else{
    //         $("#image").css("margin-top","13%");
    //         $("#profileUsername").css("margin-top","18%");
    //         $("#PostData").css("margin-top", "20%");
    //         $("#videoList").show();
    //         $("#enterFullScreen").css("margin-left","10px");
    //       }
    //   }
    // );

    // this.commentsRef$ = this.database.list("reposts").valueChanges();
    this.statusBar.overlaysWebView(true);
    this.tabs.bgColor = 'transparent';
    this.displayComments();
    this.platform.backButton.subscribeWithPriority(0, ()=>{
      this.tabs.bottom = true;
      if(this.keyboard.isVisible == true){
        this.slide.getActiveIndex().then(i=>{
          document.getElementById(i+"commentInput").blur();
          this.CommentsDown(i,true);
        });
  
      }
    });

  }

    slideOpts = {
      initialSlide: 0,
      speed: 100
    };

    pass: any;
    email: any;

    stopOtherVids(){
      //ensure previous videos are paused
      // executor (`the producing code, "singer")
      let a = document.getElementsByTagName("video");
      // console.table("videos", a);
      for(let b = 0; b < a.length; b++){a[b].pause() }
    }

    //report action sheet
    async reportSuccessfull(){
      const alert = await this.alertController.create({
        header: 'Reported',
        subHeader: 'Report successful',
        message: 'Thank you for reporting, our team will soon review the post.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

    async report(post_id) {
      const reportActionSheet = await this.actionSheetController.create({
        header: 'Report content',
        buttons: [{
          text: "it's spam",
          role: 'destructive',
          // icon: 'megaphone',
          handler: () => {
            var report = this.requests.Report('https://uploaded.herokuapp.com/users/users',post_id,"it's spam");
            report.subscribe(re=>{
              this.reportSuccessfull();
            });
          }
        },{
          text: "it's innapropriate",
          role: 'destructive',
          // icon: 'megaphone',
          handler: () => {
            this.innapropriate(post_id);
          }
        }

      ]
      });
      await reportActionSheet.present();
    }


    async innapropriate(post_id){
      const InnapropriateActionSheet = await this.actionSheetController.create({
        header: 'Innapropriate content',
        buttons: [{
          text: "Nudity or sexual activity",
          role: 'destructive',
          // icon: 'megaphone',
          handler: () => {
            var report = this.requests.Report('https://uploaded.herokuapp.com/users/users',post_id,"Nudity or sexual activity");
            report.subscribe(re=>{
              console.log(re);
              this.reportSuccessfull();
            });
          }
        },{
          text: "Hate speech or symbols",
          role: 'destructive',
          // icon: 'megaphone',
          handler: () => {
            var report = this.requests.Report('https://uploaded.herokuapp.com/users/users',post_id,"Hate speech or symbols");
            report.subscribe(re=>{
              console.log(re);
              this.reportSuccessfull();
            });
          }
        },
        {
          text: "Violence",
          role: 'destructive',
          // icon: 'megaphone',
          handler: () => {
            var report = this.requests.Report('https://uploaded.herokuapp.com/users/users',post_id,"violence");
            report.subscribe(re=>{
              console.log(re);
              this.reportSuccessfull();
            });
          }
        },{
          text: "Bullying or harrasment",
          role: 'destructive',
          // icon: 'megaphone',
          handler: () => {
            var report = this.requests.Report('https://uploaded.herokuapp.com/users/users',post_id,"Bullying or harrasment");
            report.subscribe(re=>{
              console.log(re);
              this.reportSuccessfull();
            });
          }
        },{
          text: "Intellectual property violation",
          role: 'destructive',
          // icon: 'megaphone',
          handler: () => {
            var report = this.requests.Report('https://uploaded.herokuapp.com/users/users',post_id,"IP violation");
            report.subscribe(re=>{
              console.log(re);
              this.reportSuccessfull();
            });

          }
        }

      ]
      });
      await InnapropriateActionSheet.present();

    }


    //scroll event
    scrolling(index){
      var videos_list = document.getElementsByClassName(index+"videoPostList");

      var inner_height = $("."+index+"videoPostList:eq(0)").innerHeight();
      console.log("scrool height ",videos_list[0].scrollHeight);
      console.log("scroll top ",videos_list[0].scrollTop);
      console.log("inner height is ", inner_height);
      if((videos_list[0].scrollHeight - Math.floor(videos_list[0].scrollTop)) == 300){
        console.log("scrolling ", index);
        console.log("scrool height ",videos_list[0].scrollHeight);
        console.log("scrool top ",videos_list[0].scrollTop);
        console.log(videos_list[0]);
        //
        this.slide.length().then(l=>{
          console.log("slide length ", l);
            //get more posts
            var profile_url =  'https://uploaded.herokuapp.com/users/users';
            this.results = this.requests.getFeed(profile_url,this.email,l+1);
            this.results.subscribe(x=>{
              //loop through the new posts and check if any of them exists in the posts array
              for (var p = 0; p < x.length; p++){
                console.log(this.posts.some(post => post["post_id"] == x[p].post_id)); 
                if(this.posts.some(post => post["post_id"] == x[p].post_id) == false){
                  this.posts.push(x[p]);
                } 
              }
              console.log("new posts ", this.posts);
            });
        });
      }
    }


    displayComments(){
      this.commentsRef$.subscribe((val)=>{
        
        //
        // let array_length = val.length;
        // this.latest_comment =  val[array_length]; 
        // this.latest_comment.subscribe();
        let length_of_comments = val.length;
        this.latest_comment = val[length_of_comments-1];
        // console.table("Comments",val, val[length_of_comments-1]);
        this.slide.getActiveIndex().then(i=>{
          let current_coments_display = $("."+i+"userInfo").css("display");
          // console.table(current_coments_display);
          if(current_coments_display == "none"){
            $("."+i+"LatestComment").show();
            setTimeout(function(){
              $("."+i+"LatestComment").hide();
            }, 5000);
          }
        });
        //load comments bottom
        setTimeout(function(){ 
          this.commnentsTab = document.getElementsByClassName("commentBox"); 
          this.commnentsTab = document.getElementsByClassName("commentBox"); 
          //display the last comment added
          for(let x = 0; x < this.commnentsTab.length; x++){
            this.commnentsTab[x].scrollTop = this.commnentsTab[x].scrollHeight;
            // console.log("scroll top",this.commnentsTab[x].scrollTop);
            // console.log("scroll height",this.commnentsTab[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
          }
          //reset the comments count for each post
          for(let c = 0; c < val.length; c++){
            $("#"+val[c].post+"CommentsCount").text("0");
          }
          //get the number of comments for each post
          for(let c = 0; c < val.length; c++){
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
            // console.log("scroll top2",this.commnentsTab2[x].scrollTop);
            // console.log("scroll height2",this.commnentsTab2[x].scrollHeight);
            //element.scrollTop = element.scrollHeight;
          }




        }, 2000);

      });
    }

    async getNext(username,slideNum){
      this.slide.slideNext();
    }

    CommentsUp(i){
      console.log("Move comments up");  
      this.tabs.bottom = false; 
      this.slide.lockSwipes(true);
      if(this.platform.is("android") ){
        $("."+i+"playPauseDiv").hide();
      }
      if(this.platform.is("ios")){
        $("."+i+"userInfo").css("margin-bottom","0px");
        $("."+i+"playPauseDiv").hide();
      }else{
        this.statusBar.overlaysWebView(false);
        $("."+i+"userInfo").css("margin-bottom","0px");
      }
      
    }
 
    CommentsDown(i,move_bottom_bar){
      this.statusBar.overlaysWebView(true);
      this.tabs.bottom = true; 
      console.log("Move comments down");
      if(this.platform.is("android")){
        $("."+i+"playPauseDiv").show();
      }
      if(this.platform.is("ios")){
        if(move_bottom_bar != false){
          $("."+i+"userInfo").css("margin-bottom","71px");
        }
        $("."+i+"PostData").css("margin-top","20%");
        $("."+i+"playPauseDiv").show();
      }else{
        $("."+i+"userInfo").css("margin-bottom","71px");
      }
    }


    attchKeyBoard(){
      this.statusBar.overlaysWebView(false);
    }

    dettchKeyBoard(post_id){
      this.statusBar.overlaysWebView(true);
      console.log(post_id);
    }

    share(file){
      this.presentActionSheet();
    }
    ionViewWillLeave(){
      this.slide.getActiveIndex().then((val) => { 
        console.log("left slide ", val);
        this.pauseVideo(val);
        $("slides").html("");
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
      }
    }
    
    playVideo(id,post_id){
      var video = <HTMLVideoElement> document.getElementById(id+"videobcg");
      this.tabs.bottom = true;
      let CommentsBox =  $(".allComments");
      // console.log(CommentsBox);
      //close all comment boxes
      this.CommentsDown(id,true);
      this.refresh =  true;
      this.userInfo = true;
      this.slide.lockSwipes(false);
      for(let x = 0; x < CommentsBox.length; x++){
          CommentsBox[x].style.display = 'none';
          
      }

      // this.CommentsUp(id);
      console.log("id", id);

      this.tabs.bottom = true;
      console.log(id);
      if(video.paused == true){
        //sent views
        this.currentSlideVideo();
        this.setPostViews(id,post_id);
        $("#"+post_id+"actualCommnents").show();
        $("."+id+"PostData").show();

        $("#"+id+"playPause").attr("name", "pause");
        $("#"+id+"playPause2").attr("name", "pause");
        if(window.innerWidth > 360 ){
          $("#"+id+"playPause").css("margin-right", "2.8px");
          $("#"+id+"playPause2").css("margin-right", "2.8px");
          $("#"+id+"playPause").css("margin-top", "1px");
          $("#"+id+"playPause2").css("margin-right", "1px");
        }else{
          $("#"+id+"playPause").css("margin-right", "2px");
          $("#"+id+"playPause2").css("margin-right", "2px");
          $("#"+id+"playPause").css("margin-top", "0px");
          $("#"+id+"playPause2").css("margin-right", "0px");
        }

      }else{
        video.pause();        
        $("#"+post_id+"actualCommnents").show();
        $("."+id+"PostData").show();
        if(video.paused){
          $("#"+id+"playPause").attr("name", "play");
          $("#"+id+"playPause2").attr("name", "play");
          $("#"+id+"playPause").css("margin-right", "0px");
          $("#"+id+"playPause2").css("margin-right", "0px");
          $("#"+id+"playPause").css("margin-top", "0px");
          $("#"+id+"playPause2").css("margin-top", "0px");
        }

      }

    }

    //video fast forward and rewind
    videoBack(i,post_id){
      console.log("video rewind");
      var video = <HTMLVideoElement> document.getElementById(i+"videobcg");
      console.log("current time of video",video.currentTime);
      if(video.currentTime <10){
        this.displayVideoDuration(0,video.duration,i);
        video.currentTime = 0;
      }else{
        this.displayVideoDuration(video.currentTime-10,video.duration,i);
        video.currentTime = video.currentTime-10;
      }
    }

    videoForward(i,post_id){
      console.log("video forward");
      var video = <HTMLVideoElement> document.getElementById(i+"videobcg");
      console.log("current time of video",video.currentTime);
      if(video.currentTime == video.duration){
        this.displayVideoDuration(0,video.duration,i);
        video.currentTime = 0;
      }else{
        this.displayVideoDuration(video.currentTime+10,video.duration,i);
        video.currentTime = video.currentTime+10;
      }
    }


    setPostViews(id,post_id){
      this.storage.get("username").then(username=>{
        console.log("username is " , username, " post id is ", post_id, " index is ", id);
        var postViews = this.requests.setPostViews('https://uploaded.herokuapp.com/users/users', post_id,username);
        postViews.subscribe(re=>{
          console.log("number of views is ", re);
          $("#"+id+"viewCountCont").text(re["view_count"])
        });
      });
    }

    //set the video length
    displayVideoDuration(current_lenght,video_length,current_slide ){
      let video_percent = Math.round((current_lenght/video_length)*100);
      this.percent = video_percent;
      console.log("video duration at ", video_percent +"%")
      // clearInterval(this.VideoTimer);
      clearInterval();
      setInterval(()=>{
        this.slide.getActiveIndex().then(slide=>{
          let video = <HTMLVideoElement>document.getElementById(slide+"videobcg");
          var video_percent;
          if(video == null || video == undefined){
            video_percent = Math.floor(0/100*100);
          }else{
            video_percent = Math.floor(video.currentTime/video.duration*100);
          }
          this.percent = video_percent;
        });
      },1000);
    } 



    currentSlideVideo(){
      this.stopOtherVids();
      this.slide.getActiveIndex().then((currentSlide)=>{

        //if divisible by ten
        console.log("current slide ", currentSlide+1 , " divisible by 10 " ,(currentSlide+2)%10 )
        if((currentSlide+2)%10 == 0){
          this.slide.length().then(l=>{
            if(l == currentSlide+1){
              console.log("last video id is ", currentSlide);
              var profile_url =  'https://uploaded.herokuapp.com/users/users';
              this.results = this.requests.getFeed(profile_url,this.email,l+1);
              this.results.subscribe(x=>{
                //loop through the new posts and check if any of them exists in the posts array
                for (var p = 0; p < x.length; p++){
                  console.log(this.posts.some(post => post["post_id"] == x[p].post_id)); 
                  if(this.posts.some(post => post["post_id"] == x[p].post_id) == false){
                    this.posts.push(x[p]);
                  } 
                }
                console.log("new posts ", this.posts);
              });
            }
          });
        }
        //

        console.log("currentSlide after change is ", currentSlide);
        let current_post = $("#"+currentSlide+"PostViews").text();
        let current_post_exits = true;
        console.log(current_post);
        if(current_post == "" || current_post == undefined || currentSlide == null){
          current_post = $("#"+currentSlide+"ReservedPostViews").text();
          current_post_exits = false;
        }
        var video = <HTMLVideoElement> document.getElementById(currentSlide+"videobcg");
        // this.videoDuration =  this.requests.getDuration('https://uploaded.herokuapp.com/users/users', current_post);
        // this.videoDuration.subscribe((duration)=>{
          let video_length = video.duration;
          this.displayVideoDuration(video.currentTime,video_length,currentSlide );
          $("#"+currentSlide+"videoLoader").hide();
            video.play(); 
            //check if the video is actually playing
            console.log("current video is paused ", video.paused);
            if(video.paused){
              $("#"+currentSlide+"playPause").attr("name", "play");
            }
            
          // console.log(duration, video_length);
          // video.currentTime = parseFloat(duration[0]);
          // console.log("post username ", duration[2]);
          // console.log(duration[1] == duration[3]);
          // video.currentTime = parseFloat(duration[0]);
          // if(duration[3] == duration[1] ){
          //   video.currentTime = parseFloat(duration[0]);
          //   this.displayVideoDuration(duration[0],video_length,currentSlide );
          //   // if(current_post_exits == false){
          //   //   let profile_url = 'https://uploaded.herokuapp.com/users/users';
          //   //   this.storage.get("mail").then((email)=>{
          //   //     this.nextPostData = this.requests.getUserFeed(profile_url, duration[2],email);
          //   //     this.nextPostData.subscribe();
          //   //   });
          //   // }
          //   this.stopOtherVids();
          //   video.play(); 
          //   console.log(document.getElementsByClassName(currentSlide+"playPauseDiv2")[0]);
          //   if(document.getElementsByClassName(currentSlide+"playPauseDiv2")[0] != undefined){
          //     if(document.getElementsByClassName(currentSlide+"playPauseDiv2")[0].children.length <= 0){
          //       $("."+currentSlide+"playPauseBtn2").hide();
          //     }else{
          //       $("."+currentSlide+"playPauseBtn2").show();
          //     }
          //   }else{
          //     $("."+currentSlide+"playPauseBtn2").show();
          //   }


          // }else{
          //   this.getNext(duration[2],currentSlide);
          // }

        // }); 

      });
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
      let current_reposts = JSON.parse($("#"+post_id+"repostCount").text());
      console.log(current_reposts);
      let repost = this.requests.Repost(profile_url,this.email, post_id);
      repost.subscribe(x =>{
        if(current_reposts > x.Response || current_reposts == x.Response){
          this.presentToast("Repost removed");
          $("#"+post_id+"repostCount").text(x.Response);
          this.slide.getActiveIndex().then((x)=>{
            $("#"+x+"repostIcon").css("color","#ffffff");
          });
        }else{
          $("#"+post_id+"repostCount").text(x.Response);
          this.presentToast("Post has been shared to your feed");
          this.slide.getActiveIndex().then((x)=>{
            $("#"+x+"repostIcon").css("color","#fc8700");
          });
        }
        
      });
    }


    removeItems(i,post_id){
      $("."+i+"LatestComment").hide();
      //remove list of video posts
      $("."+i+"videoPostList").hide();

      console.log(this.keyboard.isVisible);
      console.log($("."+"allComments").css("display"));
      if(this.keyboard.isVisible == true || $("."+"allComments").css("display") == "block"){
        this.tabs.bottom = true;
        this.statusBar.overlaysWebView(true);
        this.CommentsDown(i,true);
        $("."+"allComments").hide();
        this.slide.lockSwipes(false);
      }else{
        let current_coments_display = $("."+i+"userInfo");
        console.log(current_coments_display.css("display"));
        if(current_coments_display.css("display") == "block" /*|| this.screenOrientation.type == "landscape-primary"*/){
          $("."+i+"userInfo").css("display", "none");
          $("#"+i+"repostIcon").hide();
          $("#"+post_id+"repostCount").hide();
          $("#"+i+"shareIcon").hide();
          $("#"+post_id+"CommentsCount").hide();
          $("#"+i+"postIcon").hide();
          $("#"+i+"videoControlOverlay").show();
        }else{
          $("."+i+"userInfo").css("display", "block");
          $("#"+i+"repostIcon").show();
          $("#"+post_id+"repostCount").show();
          $("#"+i+"shareIcon").show();
          $("#"+post_id+"CommentsCount").show();
          $("#"+i+"postIcon").show();
          $("#"+i+"videoControlOverlay").hide();
        }
      }
    }

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
          $("#"+post_id+"likeIcon").css("color","#fc8700");
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


    postComment(i){
      let commentMessage = $("#"+i+"commentInput").val();
      let post_id = $("#"+i+"PostViews").text();
      var postedBy: any;
      console.log(post_id);

      this.storage.get('username').then((val) => {
        // console.log('Your age is', val);
        postedBy = val;
        if(commentMessage != null && commentMessage != ""){
          var comment = {post: post_id,user: postedBy, comment: commentMessage};
          this.database.list("comments").push(comment);
          $("#"+i+"commentInput").val("");
          var profile_url =  'https://uploaded.herokuapp.com/users/users';
          let commentNotif = this.requests.sendCommentNotification(profile_url, post_id, postedBy, commentMessage);
          commentNotif.subscribe((x)=>{
            console.log("notification sent");
          });
          

        }
        console.log(commentMessage);
      });
    }

    postComment2(post_id,i){
      var commentMessage = $("#"+i+"commentInput2").val();
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
      console.log("post id ", post_id);
      this.tabs.bottom = false;
      // $("#"+post_id+"allComments").show();
      $(".allComments").show();
      this.refresh =  false;
      // this.userInfo = false;
      this.slide.lockSwipes(true);
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

      this.highlightLikedComments();
    }

    
    highlightLikedComments(){
      this.likedComments.subscribe(x =>{
        console.log(x);
        for(let c = 0; c < x.length; c++){
          let commentCount = x[c].comment_array_number;
          let user_id = x[c].user_id;
          this.storage.get("current_userID").then(val =>{
              if(user_id ==  val){
                $("."+commentCount+"likeComment").css("color", "rgb(252, 135, 0)");
              }
          });
        }
      });
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

   async saveUserToken(){
      // savetoken
      this.oneSignal.getIds().then(identity => {
        let id = identity.userId;
        let url = 'https://uploaded.herokuapp.com/users/users';
        this.storage.get("mail").then(mail=>{
          let registerDevice = this.requests.registerDevice(url, id, mail);
          registerDevice.subscribe((x)=>{
            console.log("registration result ", x);
          });
        });
      });
    }

    async ionViewDidEnter() {
      //set current page
      this.storage.set("prev_page", document.location.href);
      //

      this.statusBar.overlaysWebView(true);
      this.tabs.bgColor = 'transparent';
      this.displayComments();
      //save user toke
      this.saveUserToken();
      
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
            if(this.initial_load == true){
              this.setFirstViews();
              
            }else{
              this.results = this.cache.loadFromObservable("posts",  this.requests.getFeed(profile_url, this.email,0)); 
              this.results.subscribe(x=>{
                this.posts = x;
                console.log("feed result", x.length);
  
                if(x.length == 0){
                  this.tabs.bgColor = 'black';
                  // $("#tab1Content").append("<p style='font-size:15px; color:grey;text-align:-webkit-center;margin-top:20%;'>Feed looks empty, follow others to start seeing content<br><ion-icon name='eye' style='margin-top:16px;font-size:30px;'></ion-icon></p>");
                }
  
                if(this.initial_load ==true){
                  console.log("initial load is ", this.initial_load)
                  
                }
              });
            }
        }
      });
    }

    videoFullScreen(index,post_id){
      // get current
      // console.log(this.screenOrientation.type);
      // if(this.screenOrientation.type != "landscape-primary"){
      //   this.tabs.bottom = false;
      //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      //   this.removeItems(index,post_id)
      // }else{
      //   this.tabs.bottom = true;
      //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      //   this.removeItems(index,post_id)
      // }


    }

    goToPost(index){
    //  this.screenOrientation.ORIENTATIONS.PORTRAIT;
      this.slide.slideTo(index);
    }

    viewVideoPostList(i){
      var post_list = $("."+i+"videoPostList");
      post_list.show();
    }

    // ListenLoad(){
    //   this.results.subscribe((x)=>{
    //     if(document.readyState == "complete"){
    //       for(let a =0; a < x.length; a++){
    //         let circ =  JSON.stringify(this.circle_circum/x[a].post_count);
    //         console.log(circ);
    //         $("#"+a+"Circle").css("stroke-dasharray", circ+", 10");
    //       } 
    //     }
    //   });
    // }

    async presentNotificationToast(msg){
      const toast = await this.toastController.create({message: msg.body, duration: 3000});
      toast.present();
    }

  ionViewDidLeave(){
      console.log("Left stream page");
      this.slide.getActiveIndex().then((index)=>{
          console.log("current index when leaving ", index);
          let slide_post = $("#"+index+"ReservedPostViews").text();
          let slide_post2 = $("#"+index+"PostViews").text();
          console.log("slide number ", slide_post, " ", slide_post2);
      });
    }


    async setFirstViews(){
        await this.slide.getActiveIndex().then((index)=>{
          this.results.subscribe((val)=>{
              let post_id = JSON.stringify(val[0].post_id);
                this.slide.getActiveIndex().then((val) => { 
                  console.log("first video slid id is ",val);
                  this.playVideo(val,post_id);
                  this.initial_load = true;
                });
          });
        });
    }


    getDate(){
      // var options = { weekday: 'numeric',year:'numeric', month: 'numeric', day: 'numeric' };
      var options = {year:'numeric', month: 'numeric', day: 'numeric' };
      var today  = new Date();
      var hours = today.getHours();
      var mins = today.getMinutes();
      var time = hours+":"+mins;
      var date = today.toLocaleDateString("en-US", options)+", "+time     
      return date;
    }

    //handles the number of live viewer
    async swiped(id,post_id,direction){


      this.commentInput = "";
      console.log("post", post_id)
      console.log("left");
      let idd = id - 1;
      this.current_post_id = post_id;
      var video = <HTMLVideoElement> document.getElementById(id+"videobcg");
      console.log(id);
      console.log("paused",video.paused);

      console.log(direction);
      if(direction == "left"){
        let current_post_id = $("#"+parseInt(id+1)+"PostViews").text();
        let prev_post_id = $("#"+id+"PostViews").text();
        this.storage.get("current_userID").then((val)=>{
          this.slide.getActiveIndex().then((val) => { 
            console.log(val);
            this.playVideo(val,post_id);
            console.log("current post id after swipe ",current_post_id);
            console.log("slide num ", id);
          });
        });
        console.log(current_post_id);
      }else if(direction == "right"){
        let current_post_id = $("#"+idd+"PostViews").text();
        let prev_post_id = $("#"+parseInt(id)+"PostViews").text();
        this.storage.get("current_userID").then((val)=>{
          this.slide.getActiveIndex().then((val) => { 
            console.log(val);
            this.playVideo(val,post_id);
          });          
        });
      }
    }


    
    likeComment(comment_array_number){
      console.table("comment array number: ", comment_array_number);
      this.storage.get("current_userID").then(user_id =>{
        let likeIcon = $("."+comment_array_number+"likeComment")
        console.log(likeIcon.css("color"));
        if(likeIcon.css("color") == 'rgb(252, 135, 0)'){
          console.log("unliked");
          likeIcon.css("color", 'rgb(00, 00, 00)');
          this.database.list("comment_likes/").remove(JSON.stringify(comment_array_number+user_id));
        }else{
          likeIcon.css("color", 'rgb(252, 135, 0)');
          this.database.object("comment_likes/"+JSON.stringify(comment_array_number+user_id)).set({"user_id": user_id, "comment_array_number":comment_array_number});
          console.log("like successful")
        }

      });

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


    sharePost(platform){
      this.slide.getActiveIndex().then(slidenum=>{
        let post_id = $("#"+slidenum+"PostViews").html();
        if(platform == "facebook"){
          this.socialSharing.shareViaFacebook("Shared post from uploaded",null,"http://uploaded.herokuapp.com/Sharepost#"+post_id).then(x=>{
            console.log(x);
          });
        }else if(platform == "twitter"){
          this.socialSharing.shareViaTwitter("Shared post from uploaded",null,"http://uploaded.herokuapp.com/Sharepost#"+post_id).then(x=>{
            console.log(x);
          });
        }else if(platform == "instagram"){
          this.socialSharing.shareViaInstagram("http://uploaded.herokuapp.com/Sharepost#"+post_id,null).then(x=>{
            console.log(x);
          });
        }

      });
      
    }

    //present share options
    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Share post',
        buttons: [{
          text: 'Facebook',
          role: 'destructive',
          icon: 'logo-facebook',
          handler:()=>{
            this.sharePost("facebook");
          }
        }, {
          text: 'Twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.sharePost("twitter");
          }
        }, 
        {
          text: 'Instagram',
          icon: 'logo-instagram',
          handler: () => {
            this.sharePost("instagram");
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


    userTyping(){
      var last_input_char = this.commentInput.charAt(this.commentInput.length-1);
      var position_of_tagsymb = this.commentInput.indexOf("@");
      if(last_input_char == "@"){
        console.log(last_input_char);
        var get_tags = this.requests.getTagUsers("https://uploaded.herokuapp.com/users/users","@");
        get_tags.subscribe(re=>{
          console.log(re);
          this.taggedUsers = re.users;
          this.tag = true;

        });
      }
      else if(this.taggedUsers != undefined && last_input_char !="@"){
        console.log(position_of_tagsymb);
      }
      else if (last_input_char == ""){
        this.taggedUsers = undefined;
      }
    }
}
