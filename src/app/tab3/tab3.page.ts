import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  notificationssRef$: Observable<any[]>;
  username: Observable<any>;
  userNotif: Observable<any>
  constructor(private tabs: TabsPage,private database:AngularFireDatabase,private statusBar: StatusBar, private storage: Storage, private route: Router,) {
    this.notificationssRef$ = this.database.list("notification", ref => ref.orderByChild('date')).valueChanges();
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    this.notificationssRef$.subscribe((x)=>{
      console.log(x);
    });

    this.storage.get("current_userID").then(val=>{
      this.database.object("userReceivedNotification/"+val).set(false);
      this.tabs.notifBadge = false;
    });
  }


  changeIconColors(){
    this.tabs.tab1 = "white";
    this.tabs.tab2 = "white";
    this.tabs.tab3 = "white";
    this.tabs.tab4 = "#fc8700";
    this.tabs.tab5 = "white";
  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
    this.changeIconColors();
    // Put here the code you want to execute
    this.storage.get('username').then((val) => {
      console.log('Your username is', val);
      this.username = val;
      var profile_url =  'https://uploaded.herokuapp.com/users/users';
      if(this.username == undefined){
        this.route.navigate(['login']);
      }

      //date calc
      this.notificationssRef$.subscribe(notif=>{
        let notifi = notif.reverse();
        for(let count = 0; count < notif.length; count++){
          if(notifi[count].date){
            let new_date = new Date(notifi[count].date);
            let month = new_date.getMonth();
            let day = new_date.getDay();
            let today = new Date();
            console.log(new_date, today)
            console.log(month == today.getMonth())
            console.log(day == today.getDay())
            if(month == today.getMonth() && day == today.getDay()){
                if(today.getHours() > new_date.getHours() && new_date.getHours() > 0){
                  let passed_hours = today.getHours() - new_date.getHours();
                  $("#"+count+"DateHolder").html(JSON.stringify(passed_hours)+"h");
                }else if(today.getMinutes() > new_date.getMinutes() && new_date.getMinutes() > 0){
                  let passed_minutes = today.getMinutes() - new_date.getMinutes();
                  $("#"+count+"DateHolder").html(JSON.stringify(passed_minutes)+"m");
                  console.log(passed_minutes, count);
                }else{
                  $("#"+count+"DateHolder").html("now");
                }
     
            }else{
              if(month == today.getMonth() && day != today.getDay()){
                let passed_day = today.getDate() - new_date.getDate();
                console.log(new_date.getDate(), today.getDate());
                if(today.getDate() > new_date.getDate() ){
                  console.log(passed_day);
                  $("#"+count+"DateHolder").html(JSON.stringify(passed_day)+"d");
                }
              }
            }

          }  
        }
      });
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
