import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular'; //used for alert popup

import { TellUsPage } from '../tell-us/tell-us';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  tellUs = TellUsPage;
  calltimes = 0;//number of times popup was accessed
  constructor(public popup: AlertController){}

  //Displays a popup describing the password criteria
  showPasswordCriteria(){
    if(this.calltimes < 1)//makes sure it only happens once
    {
      let click = this.popup.create({
        title: 'Password Criteria',
        subTitle: 'Paswords MUST BE seven (7) characters long and MUST contain at least one (1) number and one (1) uppercase later. No symbols (e.g. #$%^@&*+_) are allowed',
        buttons:['OK']
      });
      click.present();
      this.calltimes++;
    }


  }
}
