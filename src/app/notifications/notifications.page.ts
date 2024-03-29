import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(private route: Router, private platform: Platform, private statusBar: StatusBar,private iab: InAppBrowser) { 
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
    this.platform.backButton.subscribeWithPriority(0, ()=>{
      this.route.navigate(['/home/tabs/tab4'])
    });
  }

  ngOnInit() {
  }

  back(){
    this.route.navigate(['/home/tabs/tab4'])
  }


  openTermsOfService(){
    const browser = this.iab.create('http://uploadedstream.com/Terms%20of%20Service%20for%20uploaded.pdf','_system');
    browser.show()
  }

  openPrivacyPolicy(){
    const browser = this.iab.create('http://uploadedstream.com/Privacy%20Policy%20for%20Uploaded.pdf','_system');
    browser.show()
  }

  ionViewDidEnter(){
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.statusBar.styleDefault();
  }
  

  navigateToNotifications(){
    this.route.navigate(['/home/tabs/notifyme']);
  }


}
