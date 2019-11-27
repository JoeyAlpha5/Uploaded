import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, 
    // private oneSignal: OneSignal,
    alertController, route) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertController = alertController;
        this.route = route;
        this.initializeApp();
        // firebase.initializeApp(firebaseConfig);
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            // this.setupPush();
        });
    }
    /*setupPush(){
      this.oneSignal.startInit("213117e1-5258-44df-9de4-7206c18669b9","929396145480");
  
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
  
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        //got to notifications page
        this.route.navigate(['/home/tabs/tab3']);
      });
  
      this.oneSignal.handleNotificationReceived().subscribe(data => {
      // do something when notification is received
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.presentAlert(title,msg,additionalData)
  
      });
  
      this.oneSignal.endInit();
    }*/
    presentAlert(title, msg, additionalData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                subHeader: msg,
                message: additionalData,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        AlertController,
        Router])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map