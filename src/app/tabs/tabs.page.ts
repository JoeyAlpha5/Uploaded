import { Component } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


  bottom: boolean = true;
  bgColor: string = "black";
  tab1 = "white";
  tab2 = "white";
  tab3 = "white";
  tab4 = "white";
  tab5 = "white";
  notifBadge: boolean = false;
  userNotif: Observable<any>;
  

  constructor(    
    private database:AngularFireDatabase,
    private storage: Storage
  ) {

    // this.storage.get("current_userID").then(val=>{
    //   this.userNotif = this.database.object("userReceivedNotification/"+val).valueChanges();
    //   this.userNotif.subscribe(x=>{
    //     console.log("user to receive live notifications", x);
    //     if(x == true){
    //       this.notifBadge = true;
    //     }else{
    //       this.notifBadge = false;
    //     }
    //   });
    // });
  }

  // ionViewDidEnter() {
  //   // Put here the code you want to execute
  //   // console.log('page has loaded');
  //   // //check if user is signed in
  //   // const email = localStorage.getItem('email');
  //   // const password = localStorage.getItem('password');
  //   // if(email == null && password == null){
  //   //   window.location.href = '';
  //   // }else{
  //   //   console.log('User is signed in');
  //   // }
    
  // }


}
