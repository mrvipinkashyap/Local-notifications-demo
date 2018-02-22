import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
declare var cordova;
declare var window;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    window.skipLocalNotificationReady = true
    // used for an example of ngFor and navigation
    
    this.platform.ready().then(() => {
      this.initializeApp();
    })
  }

  initializeApp() {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    cordova.plugins.notification.local.on('click', function (obj) {
      console.log("obj on: ", obj);
      alert("Alert: " + JSON.stringify(obj));
    });
    cordova.plugins.notification.local.fireQueuedEvents();
  }

  
}
