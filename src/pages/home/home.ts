import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';
declare var cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cordova: any;
  notificationForm: FormGroup;
  constructor(public navCtrl: NavController, public platform: Platform, public formBuilder: FormBuilder,
    private localNotifications: LocalNotifications
  ) {
    this.notificationForm = formBuilder.group({
      id: ['', Validators.required],
    })
  }

  submit() {
    var vm = this;
    let addnotifications = () => {
      console.log("addnotifications");
    }
 
    cordova.plugins.notification.local.schedule(
      {
        id: Math.floor(Math.random() * 10000),
        title: 'My first notification',
        trigger: {at: (new Date().getTime() + 3600)},
        foreground:true
      }
    );
  }
  
}
