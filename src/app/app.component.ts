import { Component } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import * as firebase from 'firebase';
// import { firebaseConfig } from "./firebase-env";
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RequestsService } from "./services/requests.service";
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // notificationssRef$: Observable<any[]>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    public alertController: AlertController,
    private storage: Storage,
    private requests: RequestsService,
    private route: Router,
    private database:AngularFireDatabase,

  ) {
    this.initializeApp();
    // firebase.initializeApp(firebaseConfig);

    if(this.platform.is("android")){
      this.setUpPush();
    }

    // this.notificationssRef$ = this.database.list("notifications").valueChanges();
  }

  setUpPush(){
    let oneSignalAppID =  "213117e1-5258-44df-9de4-7206c18669b9";
    let oneSignalApiKey = "ODM2NDQ4MTQtYzNiZC00MDA4LWI3YTQtYmZiZGY0ZjhjOGJl";
    let firebaseSenderID =  "929396145480";
    this.oneSignal.startInit(oneSignalAppID,firebaseSenderID);

    //check the device is already registered
    let device_id = this.storage.get("device_id").then((val)=>{
      if(val == undefined){
        this.oneSignal.getIds().then((id)=>{
          let device = id.userId;
          let url = 'https://uploaded.herokuapp.com/users/users';
          this.storage.get('mail').then((mail)=>{
            this.requests.registerDevice(url, mail, device).subscribe();
          });
        });
      }
    });


    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    this.oneSignal.handleNotificationReceived().subscribe((data) => {
    // do something when notification is received
    let msg = data.payload.body;
    let title = data.payload.title;
    let additionalData = data.payload.additionalData;
    this.postNotification(data.payload.body);
    this.showAlert(title, msg, additionalData.task);

    });


    
    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      // do something when a notification is opened
      let additionalData = data.notification.payload.additionalData;
          //post live notification
      // this.postNotification({"title":"test", "msg":"test"});
      this.route.navigate(['/home/tabs/tab3']);
    });

    this.oneSignal.endInit();
  }



  postNotification(notification){
    this.storage.get('username').then((val) => {
      this.database.list("notifcation").push({"notification":notification, "id":val});
    });
  }

  async showAlert(title, msg,additionalData) {
    const alert = await this.alertController.create({
      header: title,
      subHeader:msg,
      // message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
}
