import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  notificationssRef$: Observable<any[]>;
  username: Observable<any>;
  constructor(private database:AngularFireDatabase,private statusBar: StatusBar, private storage: Storage, private route: Router,) {
    this.notificationssRef$ = this.database.list("notification", ref => ref.orderByChild('date')).valueChanges();
    this.notificationssRef$.subscribe((x)=>{
      console.log(x);
    });
  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    // Put here the code you want to execute
    this.storage.get('username').then((val) => {
      console.log('Your username is', val);
      this.username = val;
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      if(this.username == undefined){
        this.route.navigate(['']);
      }
    });
  }


  viewPost(post){
    console.log(post);
    this.storage.set("post", post);
    this.route.navigate(['/home/tabs/postView']);
  }


  viewUser(userId,email){
    console.log(userId);
    console.log("user",userId);
    this.storage.set("user_id",userId);
    this.storage.set("userProfileEmail",email);
    this.route.navigate(['/home/tabs/profile']);
  }


  viewChat(id,first_name,last_name,username){
    console.log(first_name, last_name,id)
    this.storage.set("receiverName", first_name);
    this.storage.set("receiverSName", last_name);
    this.storage.set("receiverUsername", username);
    this.storage.set("receiverID", id);
    this.route.navigate(['/home/tabs/messaging']);

  }
  
}
