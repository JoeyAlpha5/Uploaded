import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireStorageModule, StorageBucket } from "angularfire2/storage";
import { firebaseConfig } from "./firebase-env";
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { RequestsService } from './services/requests.service';
import {NotificationServiceService} from './services/notification-service.service';
import { MediaCapture, MediaFile, CaptureError,CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
// Import ng-circle-progress
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {Tab1Page} from './tab1/tab1.page';
import {TabsPage } from './tabs/tabs.page';
import { CacheModule } from 'ionic-cache';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';



export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'swipe':{direction: Hammer.DIRECTION_ALL }
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    CacheModule.forRoot(),
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RequestsService,
    Tab1Page,
    TabsPage,
    NotificationServiceService,
    MediaCapture,
    InAppBrowser,
    Media,
    Keyboard,
    ScreenOrientation,
    OneSignal,
    SocialSharing ,
    { provide: StorageBucket, useValue: 'gs://uploaded-9719b.appspot.com/' },
    HTTP,
    Camera,
    File,
    WebView,
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
