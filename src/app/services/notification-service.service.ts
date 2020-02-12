import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from "angularfire2/firestore";
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private storage: Storage,private toast: ToastController, private http: HttpClient, public afs: AngularFirestore, private platform: Platform) { }

  getNotificationPost(url,notification_id,email): Observable<any>{
    return this.http.get(url, {params: {type: 'notification_post', id: notification_id,email:email}}).pipe(
      map(results => {
        console.log("Results",results); 
        return results["Response"];
      })
    );
  }
}
