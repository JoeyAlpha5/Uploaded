import { Component } from '@angular/core';

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
  

  constructor() {}

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
