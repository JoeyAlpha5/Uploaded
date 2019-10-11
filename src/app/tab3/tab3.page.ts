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
    this.notificationssRef$ = this.database.list("notifcation").valueChanges();
    this.notificationssRef$.subscribe( (x)=>{ console.log(x) });
  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    // Put here the code you want to execute
    this.storage.get('username').then((val) => {
      console.log('Your username is', val);
      this.username = val;
      this.username= val;
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      if(this.username == undefined){
        this.route.navigate(['']);
      }
    });
  }
  
}
