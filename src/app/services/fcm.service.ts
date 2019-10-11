import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from "angularfire2/firestore";
@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform
  ) { }

    async getToken(){
      let token;

      if(this.platform.is("android")){
        token = await this.firebaseNative.getToken();
      }

      if(this.platform.is("ios")){
        token = await this.firebaseNative.getToken();
        const perm = await this.firebaseNative.grantPermission();
      }

      return this.saveToken(token);

    }

    private saveToken(token){
      if(!token) return;
      const devices = this.afs.collection("devices");

      const userData = {
        token,
        "user_id":"test_user"
      }

      devices.doc(token).set(userData);

      //save token to backend
      //this.requests.saveDeviceToken(url,token,user_id);

    }

    listenToNotifications(){
      return this.firebaseNative.onNotificationOpen();
    }


}
