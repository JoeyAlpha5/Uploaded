import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  results: Observable<any>;
  searchTerm = '';
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  userID: Observable<any>;
  searchContent: Observable<any>;
  constructor(private tabs: TabsPage,private platform: Platform,private requests: RequestsService, private statusBar: StatusBar,private route: Router,private storage: Storage ) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    // this.platform.backButton.subscribe(() => {
      
    // });

  }

  viewPost(post_id){
    this.storage.set("post", post_id);
    this.route.navigate(['/home/tabs/postView']);

  }


  changeIconColors(){
    this.tabs.tab1 = "white";
    this.tabs.tab2 = "#fc8700";
    this.tabs.tab3 = "white";
    this.tabs.tab4 = "white";
    this.tabs.tab5 = "white";
  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    this.changeIconColors();
    this.storage.get('mail').then((val) => {
      if(val == undefined){
        this.route.navigate(['']);
      }else{
        this.storage.get('current_userID').then((val) => {
          this.userID = val;
          this.searchContent =  this.requests.searchPage(this.profile_url);
          this.searchContent.subscribe();
        });
      }
    })
  }


  getSearchResults(){
    console.log(this.searchTerm);
    var user_email = JSON.parse(localStorage.getItem('email'));
    this.results = this.requests.getSearchResults(this.profile_url, this.searchTerm, user_email); 
  }

  viewProfile(user_id,email){
    console.log("user",user_id);
    this.storage.set("user_id",user_id);
    this.storage.set("userProfileEmail",email);
    this.route.navigate(['/home/tabs/profile']);
  }

}
