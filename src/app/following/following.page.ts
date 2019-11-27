import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TabsPage } from '../tabs/tabs.page';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  username: any;
  results: Observable<any>;
  @ViewChild('slider', {static: false}) slide: IonSlides;
  constructor(private location: Location,private tabs: TabsPage,private requests: RequestsService,private statusBar: StatusBar,private route: Router,private storage: Storage ) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();  
    this.tabs.bgColor = '#000000';  
   }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  ionViewDidEnter(){
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.storage.get("profileUserName").then(val=>{
      this.username = val;
      this.results = this.requests.getFollowing('https://uploaded.herokuapp.com/users/users',val);
      this.results.subscribe();
    });
    this.storage.get("followingNum").then(val=>{
      console.log(val);
      if(val == 1){
        this.slide.slideNext();
      }
    });
  }

  viewProfile(user_id,email){
    console.log("user",user_id);
    this.storage.set("user_id",user_id);
    this.storage.set("userProfileEmail",email);
    this.route.navigate(['/home/tabs/profile']);
  }

  back(){
    // this.tabs.bottom = true;
    this.location.back();
  }

}
