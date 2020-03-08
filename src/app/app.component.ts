import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';
import { AngularFireDatabase} from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { RequestsService } from './services/requests.service';
import { CacheService } from 'ionic-cache';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  notificationssRef$: Observable<any[]>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    public alertController: AlertController,
    private route: Router,
    private database:AngularFireDatabase,
    private storage: Storage,
    private requests: RequestsService,
    private CacheService: CacheService,
  ) {
    this.initializeApp();
    
    // firebase.initializeApp(firebaseConfig);
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.CacheService.setDefaultTTL(30);
      this.CacheService.setOfflineInvalidate(false);

      this.setupPush();
      
    });
  }

  setupPush(){
    this.oneSignal.startInit("213117e1-5258-44df-9de4-7206c18669b9","929396145480");

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      // do something when a notification is opened
      //got to notifications page
      // this.route.navigate(['/home/tabs/tab3']);
      console.table(data)
      console.log(data.notification.payload.notificationID);
      var notification_id = data.notification.payload.notificationID;
      var url = "https://uploaded.herokuapp.com/users/users";
      this.storage.get("mail").then((email)=>{
        var post = this.requests.getNotificationPost(url,notification_id,email);
        post.subscribe(re=>{
          this.storage.set("uerFeedUsername", re["Response"]);
          this.route.navigate(['/home/tabs/userfeed']);
        });
      });      
    });

    this.oneSignal.handleNotificationReceived().subscribe((data) => {
      // this.storage.get("current_userID").then(val=>{
      //   this.database.object("userReceivedNotification/"+val).set(true);
      // });
    // do something when notification is received
    // let msg = data.payload.body;
    // let title = data.payload.title;
    // let additionalData = data.payload.additionalData;
    // this.presentAlert(title,msg,additionalData)
    });

    this.oneSignal.endInit();
  }


  async presentAlert(title,msg,additionalData) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: msg,
      message: additionalData,
      buttons: ['OK']
    });

    await alert.present();
  }

  
}
