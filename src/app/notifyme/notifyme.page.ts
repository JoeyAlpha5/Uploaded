import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { Storage } from '@ionic/storage';
import { RequestsService } from '../services/requests.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular'
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-notifyme',
  templateUrl: './notifyme.page.html',
  styleUrls: ['./notifyme.page.scss'],
})
export class NotifymePage implements OnInit {


  pushAll: boolean = false;
  like: boolean = false;
  follow: boolean = false;
  comment: boolean = false;
  repost: boolean = false;
  upload: boolean = false;
  features: boolean = false;
  dm: boolean = false;
  tag: boolean = false;
  notification: Observable<any>;
  updateNotifications: Observable<any>;
  results: Observable<any>;
  profile_url =  'https://uploaded.herokuapp.com/users/users';
  constructor(private storage: Storage,private requests: RequestsService, public toastController: ToastController, private route: Router, private platform: Platform, private statusBar: StatusBar ) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.platform.backButton.subscribeWithPriority(0, ()=>{
      this.route.navigate(['/home/tabs/notifications'])
    });
  }

  ngOnInit() {
  }

  back(){
    this.route.navigate(['/home/tabs/notifications'])
  }

  ionViewDidEnter() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.storage.get('current_userID').then((val) => {
      this.results =  this.requests.getNotificationSettings(this.profile_url,val);
      this.results.subscribe(x =>{
        console.log(x);
        this.like = x.like;
        this.follow = x.follow;
        this.comment = x.follow;
        this.repost = x.repost;
        this.upload = x.upload;
        this.tag = x.tag;
        this.dm = x.dm;
        this.features = x.features;
        this.pushAll = x.pushAll;
        
      });
    });
  }

  enableAllNotifications($event){
    console.log($event.target.checked);
    if($event.target.checked == true){
      this.pushAll = true;
      this.like = true;
      this.follow = true;
      this.comment = true;
      this.repost = true;
      this.upload = true;
      this.features = true;
      this.dm = true;
      this.tag = true;
      this.storage.get('current_userID').then((val) => {
        this.notification = this.requests.UpdateNotifications(this.profile_url, val, "allTrue");
        this.notification.subscribe(x =>{
          
        });
      });
    }
    else{
      this.pushAll = false;
      this.like = false;
      this.follow = false;
      this.comment = false;
      this.repost = false;
      this.upload = false;
      this.features = false;
      this.dm = false;
      this.tag = false;
      this.storage.get('current_userID').then((val) => {
        this.notification = this.requests.UpdateNotifications(this.profile_url, val, "allFalse");
        this.notification.subscribe(x =>{
          this.presentToast(x.Response);
        });
      });
    }
  }

  updateNotification(type, value){
    console.log(type)
    if(type == "like"){
      this.like = JSON.parse(value);
      console.log(this.like);
    }else if(type == "follow"){
      this.follow = JSON.parse(value);
      console.log(this.follow);
    } else if(type == "comment"){
      this.comment = JSON.parse(value);
      console.log(this.comment);
    }else if(type == "repost"){
      this.repost = JSON.parse(value);
      console.log(this.repost);
    }else if(type == "upload"){
      this.upload = JSON.parse(value);
      console.log(this.upload);
    }else if(type == "tag"){
      this.tag = JSON.parse(value);
      console.log(this.tag);
    }else if(type == "features"){
      this.features = JSON.parse(value);
      console.log(this.features);
    }else{
      this.dm = JSON.parse(value);
      console.log(this.dm);
    }
    this.storage.get('current_userID').then((val) => {
      this.updateNotifications = this.requests.UpdateIndividualNotifications(this.profile_url, val, type, value);
      this.updateNotifications.subscribe(x =>{
        this.presentToast(x.Response);
      });
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
