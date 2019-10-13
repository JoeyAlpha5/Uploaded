import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.page.html',
  styleUrls: ['./messaging.page.scss'],
})

export class MessagingPage implements OnInit {


  chatsRef$: Observable<any[]>;
  chatID: Observable<any>;
  name: Observable<any>;
  sname: Observable<any>;
  receiverUsername: Observable<any>;
  receiverID: Observable<any>;
  this_userID: Observable<any>;
  this_username: Observable<any>;
  constructor(private statusBar: StatusBar,private storage: Storage,private database:AngularFireDatabase,private route: Router, private requests: RequestsService) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
  }

  ngOnInit() {
  }



  ionViewDidEnter() {
    // Put here the code you want to execute
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
    this.storage.get('mail').then((val) => {
      let profile_url =  'https://uploaded.herokuapp.com/users/users';
      //profile_url = 'http://127.0.0.1:8000/users/users'
      if(val == undefined){
        this.route.navigate(['']);
      }else{
        this.storage.get('username').then((val)=>{
          this.this_username = val;
        });
        this.getChat();
      }
    });
  }


  getChat(){
    this.storage.get("receiverName").then( (name)=>{
      this.name = name;
      console.log(name);
      this.storage.get("receiverSName").then( (sname)=>{
        this.sname = sname;
        this.storage.get("receiverID").then((id)=>{
          this.receiverID = id;
          this.storage.get("receiverUsername").then((username)=>{
            this.receiverUsername = username;
            //get this current user's id
            this.storage.get("current_userID").then( (id)=>{
              this.this_userID = id;
              //get the chat ID
              let user_ids: number[] = [id, this.receiverID];
              console.log(user_ids);
              console.log(Math.max.apply(Math,user_ids), Math.min.apply(Math,user_ids));
              let chat_id =  JSON.stringify(Math.max.apply(Math,user_ids)) + JSON.stringify(Math.min.apply(Math,user_ids));
              this.chatsRef$ =  this.chatsRef$ = this.database.list("chats/"+chat_id, ref => ref.orderByChild('date') ).valueChanges();
              this.chatsRef$.subscribe(()=>{
                this.scroll();
              });
            });
          });
        });
      });
    });
  }


  sendMessage(){
    let messageInput = $("#message").val();
    console.log(messageInput);
    console.log(this.receiverUsername, this.receiverID);
    //get this user's id
    this.storage.get("current_userID").then( (id)=>{
      console.log(id);
      let user_ids: number[] = [id, this.receiverID];
      console.log(user_ids);
      console.log(Math.max.apply(Math,user_ids), Math.min.apply(Math,user_ids));
      let chat_id =  JSON.stringify(Math.max.apply(Math,user_ids)) + JSON.stringify(Math.min.apply(Math,user_ids));
      console.log(chat_id);
      if(messageInput != ""){
        let message = { "sender":this.this_username, "to":this.receiverUsername, "message":messageInput };
        //send message notification
        this.sendMessageNotification(this.receiverUsername, messageInput,this.this_username);
        this.database.list("chats/"+chat_id).push(message);
        $("#message").val("");
        this.scroll();
       }
    });
  }


  scroll(){
    setTimeout(function(){
      let objDiv = document.getElementById("chatsContainer");
      objDiv.scrollTop = objDiv.scrollHeight;
    },10);
  }


  //send notifcation of new message
  sendMessageNotification(receiver,message, from){
    let profile_url =  'https://uploaded.herokuapp.com/users/users';
    let new_message = this.requests.sendMessageNotification(profile_url, receiver, from,message);
    new_message.subscribe();


  }

}
