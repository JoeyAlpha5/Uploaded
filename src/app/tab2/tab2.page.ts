import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  results: Observable<any>;
  searchTerm = '';
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  constructor(private requests: RequestsService, private statusBar: StatusBar,private route: Router,private storage: Storage ) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();

  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.storage.get('mail').then((val) => {
      if(val == undefined){
        this.route.navigate(['']);
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
