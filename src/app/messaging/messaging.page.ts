import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RequestsService } from '../services/requests.service';
import { AngularFireStorage, AngularFireUploadTask } from "angularfire2/storage";
import { ToastController } from '@ionic/angular';
import * as $ from 'jquery';
import { TabsPage } from '../tabs/tabs.page';
import { MediaCapture, MediaFile, CaptureError,CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';


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
  chatUpload: Observable<any[]>;
  constructor(private media: Media,private mediaCapture: MediaCapture,private fstorage: AngularFireStorage,private tabs: TabsPage,public toastController: ToastController,private statusBar: StatusBar,private storage: Storage,private database:AngularFireDatabase,private route: Router, private requests: RequestsService) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.tabs.bgColor = '#000000';
  }

  ngOnInit() {
  }


  notBottom(){
    this.tabs.bottom = false;
    $("#messageInput").css("margin-bottom","0px");
  }


  displayBottom(){
    this.tabs.bottom = true;
    $("#messageInput").css("margin-bottom","56px");
  }


  ionViewDidEnter() {
    // Put here the code you want to execute
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.tabs.bgColor = '#000000';
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


  async sendMessage(){
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
        //file Upload
        let message;
        let fileN;
        if(this.file != undefined){
          var profile_url =  'https://uploaded.herokuapp.com/users/users';
          this.chatUpload = this.requests.UploadChatFile(profile_url,this.file.name,this.file,);
          this.chatUpload.subscribe(re=>{
            console.log("re",re);
            message = { "sender":this.this_username, "to":this.receiverUsername, "message":messageInput, "file":re };
            this.file = undefined;
            this.database.list("chats/"+chat_id).push(message);
          });
        }else{
          message = { "sender":this.this_username, "to":this.receiverUsername, "message":messageInput};
          this.file = undefined;
          this.database.list("chats/"+chat_id).push(message);
        }
        
        //send message notification
        this.sendMessageNotification(this.receiverUsername, messageInput,this.this_username);
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


  file: File;
  changeListener($event){
    this.file = $event.target.files[0];
    console.log(this.file.name);
    this.presentToast("FIle selected: " + this.file.name);
 
  }

  //firebase storage
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  imageToView: any;
  viewImage(image){
    console.log(image);
    this.imageToView = image;
    $("#imageBox").show();
  }

  closeImage(){
    $("#imageBox").hide();
    this.imageToView = "";
  }


  captureAudio(){
    let options: CaptureAudioOptions = { limit: 1, duration: 30 }
    this.mediaCapture.captureAudio(options)
      .then(
        (data: MediaFile[]) => console.log(data),
        (err: CaptureError) => console.error(err)
      );
    }

}
