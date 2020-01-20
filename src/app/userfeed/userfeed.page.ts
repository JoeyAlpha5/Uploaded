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
import { Location } from '@angular/common';



@Component({
  selector: 'app-tab1',
  templateUrl: 'userfeed.page.html',
  styleUrls: ['userfeed.page.scss']
})
export class UserfeedPage {

  results: Observable<any>;
  display_firsts: boolean = true;
  nextPostData: Observable<any>;
  commentsRef$: Observable<any[]>;
  repostsRef$: Observable<any[]>;
  commnentsTab: any;
  commnentsTab2: any;
  postViewsRef$: Observable<any[]>;
  likedComments: Observable<any[]>; 
  videoDuration: Observable<any[]>; 
  refresh: boolean =  true;
  userInfo: boolean = true;
  current_post_id: any;
  latest_comment: any;
  mute: boolean = true;
  percent: any;
  circle_circum = 294.159265359;
  @ViewChild('slider', {static: false}) slide: IonSlides;

  constructor(private location: Location,private keyboard: Keyboard,private tabs: TabsPage,private platform: Platform,public loadingController: LoadingController,private statusBar: StatusBar, public actionSheetController: ActionSheetController, public toastController: ToastController, private requests: RequestsService, private database:AngularFireDatabase,private route: Router,private storage: Storage,private oneSignal: OneSignal) {
    this.commentsRef$ = this.database.list("comments").valueChanges();
    this.postViewsRef$ = this.database.list("views").valueChanges();
    this.likedComments = this.database.list("comment_likes").valueChanges();

    // this.commentsRef$ = this.database.list("reposts").valueChanges();
    this.statusBar.overlaysWebView(true);
    this.tabs.bgColor = 'transparent';
    this.displayComments();
    this.platform.backButton.subscribeWithPriority(0, ()=>{
      if(this.keyboard.isVisible == true){
        this.tabs.bottom = true;
        this.statusBar.overlaysWebView(true);
        this.slide.getActiveIndex().then(i=>{
          document.getElementById(i+"commentInput").blur();
          this.CommentsDown(i);
        });
        
      }
    });

  }

    slideOpts = {
      initialSlide: 0,
      speed: 400
    };

    pass: any;
    email: any;

    back(){
      this.tabs.bottom = true;
      this.location.back();
    }

    stopOtherVids(){
      //ensure previous videos are paused
      // executor (`the producing code, "singer")
      let a = document.getElementsByTagName("video");
      console.log("videos", a);
      for(let b = 0; b < a.length; b++){a[b].pause() }
    }

    
    displayComments(){
      this.commentsRef$.subscribe((val)=>{
        
        //
        // let array_length = val.length;
        // this.latest_comment =  val[array_length]; 
        // this.latest_comment.subscribe();
        let length_of_comments = val.length;
        this.latest_comment = val[length_of_comments-1];
        console.log("Comments",val, val[length_of_comments-1]);
        this.slide.getActiveIndex().then(i=>{
          let current_coments_display = $("."+i+"userInfo").css("display");
          console.log(current_coments_display);
          if(current_coments_display == "none"){
            $("."+i+"LatestComment").show();
            setTimeout(function(){
              $("."+i+"LatestComment").hide();
            }, 5000);
          }
          // console.log("current comments display ", current_coments_display.css("display"));
        });
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




        }, 2000);

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
          let video = <HTMLVideoElement>document.getElementById(slide+"videobcgf");
          let video_percent =Math.floor(video.currentTime/video.duration*100);
          this.percent = video_percent;
        });
      },1000);
    } 

    async getNext(username,slideNum){
      console.log("user "+ username);
      $("#"+slideNum+"playPause").remove();
      console.log("ended");
      $("#"+slideNum+"commentBox").remove();
      $("#"+slideNum+"FirstPostData").remove();
      $("#"+slideNum+"oldCommentsInput").remove();
      let profile_url = 'https://uploaded.herokuapp.com/users/users';
      $("."+slideNum+"Spinner").show();
      $("."+slideNum+"videobcg").css("display","none");
      this.stopOtherVids();
      this.storage.get("mail").then((email)=>{
        let user_post: Observable <any>;
        let req = this.requests;
        let com = this.commentsRef$;
        this.nextPostData = this.requests.getUserFeed(profile_url, username,email);
        this.nextPostData.subscribe();
        //disable the firsts
        this.display_firsts = false;
        //
        $("#"+slideNum+"FirstPostData").remove();
        setTimeout(async function(){
          console.log("fetching video");
          user_post = await req.getUserFeed(profile_url, username,email);
          user_post.subscribe((users_post)=>{
            console.log(users_post);
            let post_id = users_post[0].post_id;
            console.log(post_id);
            let video_file =  "https://firebasestorage.googleapis.com/v0/b/uploaded-9719b.appspot.com/o/"+users_post[0].file+"?alt=media#t="+users_post[0].start+"";
            let post_description = users_post[0].description;

            $("#"+slideNum+"videobsourcef").attr("src",video_file);
            let new_vid = <HTMLVideoElement>document.getElementById(slideNum+"videobcgf");

            $("."+slideNum+"PostDescription").text(post_description);
            let comments_array = [];
            com.subscribe((comment)=>{
              console.log(comment);
              // $("."+slideNum+"commentSection").html("");
              for (var c = 0; c < comment.length; c ++){
                if(comment[c].post == post_id){
                  console.log(comment[c].post == post_id);
                  console.log(comment[c].post, post_id);
                  comments_array.push(comment[c]);
                }
                // {{post.post_id}}CommentsCount
                $("#"+post_id+"CommentsCount").text(comments_array.length)
              }

              // $("."+slideNum+"CommentLabel").html("<span (click)='postComment("+post_id+","+slideNum+")'>Post</span>");

              console.log(comments_array);
            });
            console.log(com);
            new_vid.load();
            // this.stopOtherVids();
            let a = document.getElementsByTagName("video");
            console.log("videos", a);
            for(let b = 0; b < a.length; b++){a[b].pause() }
            //
            new_vid.play();
            $("."+slideNum+"videobcg").css("display","block");
            $("."+slideNum+"Spinner").hide();
            $("#"+slideNum+"playPause2").attr("name", "pause");

            
  
          });
        },2000);
        // return this.requests;
      });
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
        // $("."+i+"userInfo").css("margin-bottom","82%");
        // $("."+i+"PostData").css("margin-top","-100%");
      }else{
        this.statusBar.overlaysWebView(false);
        $("."+i+"userInfo").css("margin-bottom","0px");
      }
      
    }
 
    CommentsDown(i){
      this.statusBar.overlaysWebView(true);
      this.tabs.bottom = true; 
      console.log("Move comments down");
      
      if(this.platform.is("android")){
        $("."+i+"playPauseDiv").show();
      }

      if(this.platform.is("ios")){
        $("."+i+"userInfo").css("margin-bottom","100px");
        $("."+i+"PostData").css("margin-top","20%");
        $("."+i+"playPauseDiv").show();
      }else{
        $("."+i+"userInfo").css("margin-bottom","100px");
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

    // ionicSlide(post_id){
    //   this.slide.getActiveIndex().then((val) => { 
    //     console.log(val);
    //     this.playVideo(val,post_id);
    //   });
    // }

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
        //element.scrollTop = element.scrollHeight;
      }
    }
    
    playVideo(id,post_id){
      var video = <HTMLVideoElement> document.getElementById(id+"videobcgf");
      this.tabs.bottom = true;
      let CommentsBox =  $(".allComments");
      console.log(CommentsBox);
      //close all comment boxes
      this.CommentsDown(id);
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
      console.log("paused",video.paused);
      if(video.paused == true){
 
        this.currentSlideVideo();
        $("#"+post_id+"actualCommnents").show();
        // {{ post. }}actualCommnents
        $("."+id+"PostData").show();

        $("#"+id+"playPause").attr("name", "pause");
        $("#"+id+"playPause2").attr("name", "pause");

      }else{
        video.pause();        


        // $("."+id+"userInfo").show();
        $("#"+post_id+"actualCommnents").show();
        $("."+id+"PostData").show();
        if(video.paused){
          $("#"+id+"playPause").attr("name", "play");
          $("#"+id+"playPause2").attr("name", "play");
        }

      }

    }


    currentSlideVideo(){
      this.stopOtherVids();
      this.slide.getActiveIndex().then((currentSlide)=>{
        console.log("currentSlide after change is ", currentSlide);
        let current_post = $("#"+currentSlide+"PostViews").text();
        let current_post_exits = true;
        console.log(current_post);
        if(current_post == "" || current_post == undefined || currentSlide == null){
          current_post = $("#"+currentSlide+"ReservedPostViews").text();
          current_post_exits = false;
        }
        var video = <HTMLVideoElement> document.getElementById(currentSlide+"videobcgf");
        this.videoDuration =  this.requests.getDuration('https://uploaded.herokuapp.com/users/users', current_post);
        this.videoDuration.subscribe((duration)=>{
          let video_length = video.duration;
          console.log(duration, video_length);
          video.currentTime = parseFloat(duration[0]);
          console.log("post username ", duration[2]);
          console.log(duration[1] == duration[3]);
          video.currentTime = parseFloat(duration[0]);
          if(duration[3] == duration[1] ){
            video.currentTime = parseFloat(duration[0]);
            this.displayVideoDuration(duration[0],video_length,currentSlide );
            if(current_post_exits == false){
              let profile_url = 'https://uploaded.herokuapp.com/users/users';
              this.storage.get("mail").then((email)=>{
                this.nextPostData = this.requests.getUserFeed(profile_url, duration[2],email);
                this.nextPostData.subscribe();
              });
            }
            this.stopOtherVids();
            video.play(); 
            console.log(document.getElementsByClassName(currentSlide+"playPauseDiv2")[0]);
            if(document.getElementsByClassName(currentSlide+"playPauseDiv2")[0] != undefined){
              if(document.getElementsByClassName(currentSlide+"playPauseDiv2")[0].children.length <= 0){
                $("."+currentSlide+"playPauseBtn2").hide();
              }else{
                $("."+currentSlide+"playPauseBtn2").show();
              }
            }else{
              $("."+currentSlide+"playPauseBtn2").show();
            }


          }else{
            this.getNext(duration[2],currentSlide);
          }

        }); 

      });
    }

    pauseVideo(id){
      var video = <HTMLVideoElement> document.getElementById(id+"videobcgf");
      console.log(id);
      console.log("paused",video.paused);
      video.pause();

    }

    repost(post_id){
      console.log(post_id);
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      //var profile_url = 'http://127.0.0.1:8000/users/users'
      let current_reposts = JSON.parse($("#"+post_id+"repostCount").text());
      console.log(current_reposts);
      let repost = this.requests.Repost(profile_url,this.email, post_id);
      repost.subscribe(x =>{
        // console.log(x, current_reposts > x, current_reposts == x, current_reposts, x);
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
      console.log(this.keyboard.isVisible);
      console.log($("."+"allComments").css("display"));
      if(this.keyboard.isVisible == true || $("."+"allComments").css("display") == "block"){
        this.tabs.bottom = true;
        this.statusBar.overlaysWebView(true);
        this.CommentsDown(i);
        $("."+"allComments").hide();
        this.slide.lockSwipes(false);
        
        
      }else{
        let current_coments_display = $("."+i+"userInfo");
        console.log(current_coments_display.css("display"));
        if(current_coments_display.css("display") == "block"){
          $("."+i+"userInfo").css("display", "none");
          $("#"+i+"repostIcon").hide();
          $("#"+post_id+"repostCount").hide();
          $("#"+i+"shareIcon").hide();
          $("#"+post_id+"CommentsCount").hide();
          $("#"+i+"postIcon").hide();
        }else{
          $("."+i+"userInfo").css("display", "block");
          $("#"+i+"repostIcon").show();
          $("#"+post_id+"repostCount").show();
          $("#"+i+"shareIcon").show();
          $("#"+post_id+"CommentsCount").show();
          $("#"+i+"postIcon").show();
        }
      }

      // let video = <HTMLVideoElement>document.getElementById(i+"videobcg");
      // if(this.platform.is("android") && this.mute == true){
      //   this.mute = false;
      //   video.muted = false;
      // }
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
                $("."+commentCount+"likeComment").css("color", "rgb(233, 30, 99)");
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


    async ionViewDidEnter() {
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.statusBar.styleDefault();
      this.tabs.bgColor = 'transparent';
      this.displayComments();
      this.tabs.bottom = false;
      this.slide.lockSwipes(true);
      this.storage.get('mail').then((val) => {
        this.email = val;
        if(this.email == undefined){
          console.log(this.email);
          this.route.navigate(['/home/tabs/tab1']);
        }else{
          this.storage.get("uerFeedUsername").then((val) =>{
            console.log(val);
            let profile_url = 'https://uploaded.herokuapp.com/users/users';
            this.storage.get("mail").then((email)=>{
              this.results = this.requests.getUserFeed(profile_url, val,email);
              this.results.subscribe((posts)=>{
                console.log(posts)
                this.setFirstViews();
                // this.getCurrentSlid();
                //listend for page load to display video count
                let lstLoad = this.ListenLoad;
                window.addEventListener('load', function () {
                  lstLoad();
                });
                
  
              });
              
            });
            
          });
        }
      });
    }


    ListenLoad(){
      this.results.subscribe((x)=>{
        if(document.readyState == "complete"){
          for(let a =0; a < x.length; a++){
            let circ =  JSON.stringify(this.circle_circum/x[a].post_count);
            console.log(circ);
            
            
            $("#"+a+"Circle").css("stroke-dasharray", circ+", 10");
          } 
        }
      });
    }

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
          this.storage.get("current_userID").then((val)=>{
            this.database.list("views/").remove(JSON.stringify(val+slide_post));
            this.database.list("views/").remove(JSON.stringify(val+slide_post2));
            console.log(JSON.stringify(val+slide_post));
            // this.database.object("views/"+JSON.stringify(val+post_id)).set({"user": val, "post_id":post_id});
            //display views
          });
      });
    }


    async setFirstViews(){
        console.log("hello world started");
        this.ListenLoad();
        await this.slide.getActiveIndex().then((index)=>{
          console.log("current index is", index);
          this.results.subscribe((val)=>{
            console.log("current video at index 0 ", val[0]);
            console.log("all videos  ", val);
      
              let post_id = JSON.stringify(val[0].post_id);
              this.storage.get("current_userID").then((val)=>{
                this.database.list("views/").remove(JSON.stringify(val+post_id));
                this.database.object("views/"+JSON.stringify(val+post_id)).set({"user": val, "post_id":post_id});
                //display views
                this.slide.getActiveIndex().then((val) => { 
                  console.log(val);
                  this.playVideo(val,post_id);
                });
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
                    console.log(current_views);
                  }
                });




              });
            
          });
        });
    }

    //handles the number of live viewer
    async swiped(id,post_id,direction){

      //
      console.log("post", post_id)
      console.log("left");
      let idd = id - 1;
      this.current_post_id = post_id;
      var video = <HTMLVideoElement> document.getElementById(id+"videobcgf");
      console.log(id);
      console.log("paused",video.paused);

      console.log(direction);
      if(direction == "left"){
        let current_post_id = $("#"+parseInt(id+1)+"PostViews").text();
        let prev_post_id = $("#"+id+"PostViews").text();
        this.storage.get("current_userID").then((val)=>{
          this.database.list("views/").remove(JSON.stringify(val+current_post_id))
          this.database.list("views/").remove(JSON.stringify(val+prev_post_id))
          this.database.object("views/"+JSON.stringify(val+current_post_id)).set({"user": val, "post_id":current_post_id});
          //display views
          // this.slide.getActiveIndex().then((val) => { 
          //   console.log(val);
          //   this.playVideo(val,post_id);
          // });
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
          // this.slide.getActiveIndex().then((val) => { 
          //   console.log(val);
          //   this.playVideo(val,post_id);
          // });
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


    
    likeComment(comment_array_number){
      console.log("comment array number: ", comment_array_number);
      this.storage.get("current_userID").then(user_id =>{
        let likeIcon = $("."+comment_array_number+"likeComment")
        console.log(likeIcon.css("color"));
        if(likeIcon.css("color") == 'rgb(233, 30, 99)'){
          console.log("unliked");
          likeIcon.css("color", 'rgb(00, 00, 00)');
          this.database.list("comment_likes/").remove(JSON.stringify(comment_array_number+user_id));
        }else{
          likeIcon.css("color", 'rgb(233, 30, 99)');
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
