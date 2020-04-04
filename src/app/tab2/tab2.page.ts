import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import * as $ from 'jquery';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  results: Observable<any>;
  search_videos = [];
  searchTerm = '';
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  userID: Observable<any>;
  searchContent: Observable<any>;
  oneSearchContent: Observable<any>;
  displaySearchVideos:boolean = true;
  default: boolean = false;
  artists: boolean = true;
  places: boolean = false;
  tags: boolean = false;
  initial_load: boolean = false;
  places_results: Observable<any>; 
  constructor(private tabs: TabsPage,private platform: Platform,private requests: RequestsService, private statusBar: StatusBar,private route: Router,private storage: Storage,private screenOrientation: ScreenOrientation ) {
    this.screenOrientation.ORIENTATIONS.PORTRAIT;
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    // this.platform.backButton.subscribe(() => {
      
    // });

  }


  setSearchFilter(filter){
    console.log(filter);
    if(filter == "artists"){
      this.artists = true;
      console.log(this.artists);
      this.places = false;
      this.tags = false;
    }
    else if(filter == "places"){
      this.artists = false;
      this.places = true;
      this.tags = false;
    }else{
      this.artists = false;
      this.places = false;
      this.tags = true;
    }
  }

  viewPost(username){
    this.storage.set("uerFeedUsername", username);
    this.route.navigate(['/home/tabs/userfeed']);

  }


  changeIconColors(){
    this.tabs.tab1 = "white";
    this.tabs.tab2 = "#fc8700";
    this.tabs.tab3 = "white";
    this.tabs.tab4 = "white";
    this.tabs.tab5 = "white";
  }


  search_scrollin(){
    // (videos_list[0].scrollHeight - videos_list[0].scrollTop) == 300
    var video_list = document.getElementById("searchVids");
    console.log("Scroll top ",video_list.scrollTop);
    console.log("Scroll height" ,video_list.scrollHeight);
    console.log("inner height ", $("#searchVids").innerHeight());
    // console.log(video_list.scrollHeight - video_list.scrollTop);
    if(Math.floor($("#searchVids").innerHeight() + video_list.scrollTop) == video_list.scrollHeight){
      console.log("reached bottom");
      var total_videos = document.getElementsByClassName("searc_videos");
      var number_of_current_vids = total_videos[0].childElementCount;
      console.log("total childre ", number_of_current_vids-1);
      this.searchContent = this.requests.searchPage(this.profile_url, number_of_current_vids-1);
      this.searchContent.subscribe(v=>{
        console.log("new videos ", v);
        for(var i = 0; i < v.length; i++){
          console.log(this.search_videos.some(post => post["post_id"] == v[i].post_id)); 
          if(this.search_videos.some(post => post["post_id"] == v[i].post_id) == false){
            this.search_videos.push(v[i]);
          } 
        }
      });

    }
  }

  ionViewDidEnter() {
    //set current page
    this.storage.set("prev_page", document.location.href);
    //

    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    this.changeIconColors();
    this.storage.get('mail').then((val) => {
      if(val == undefined){
        this.route.navigate(['login']);
      }else{
        this.storage.get('current_userID').then((val) => {
          this.userID = val;
          if(this.initial_load == false){
            this.initial_load = true;
            this.searchContent =  this.requests.searchPage(this.profile_url,16);
            this.oneSearchContent = this.requests.searchPageOneBig(this.profile_url);
            this.oneSearchContent.subscribe();
            this.searchContent.subscribe();

            //loop through the videos and check if any of them exists in the posts array
            this.searchContent.subscribe(x=>{
              for (var p = 0; p < x.length; p++){
                this.search_videos.push(x[p]);
              }
            });
          //


          }
        });

        this.restartVideos()
      }
    })
  }

  restartVideos(){
    //restart videos after every 5sec
    setInterval(()=>{
      let videos = document.getElementsByClassName("searchVids");
      for(let i =0; i < videos.length; i++){
        let ivideo = <HTMLVideoElement>videos[i];
        ivideo.currentTime = 0;
        // ivideo.load();
      }
    },20000);
  }


  getSearchResults(){
    console.log(this.searchTerm);
    var user_email = JSON.parse(localStorage.getItem('email'));
    this.results = this.requests.getSearchResults(this.profile_url, this.searchTerm, user_email);    
    // this.places_results = this.requests.getSearchPlacesResult(this.profile_url,this.searchTerm,user_email) 
    if(this.searchTerm != ""){
      this.displaySearchVideos = false;
    }else{
      this.displaySearchVideos =  true;
    }
    
  }

  viewProfile(user_id,email){
    console.log("user",user_id);
    this.storage.set("user_id",user_id);
    this.storage.set("userProfileEmail",email);
    this.route.navigate(['/home/tabs/profile']);
  }

}
