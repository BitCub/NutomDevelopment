import { Component } from '@angular/core';

import { SignUpPage } from '../sign-up/sign-up';

@IonicPage()

@Component({
  selector: 'page-starter',
  templateUrl: 'starter.html',
})
export class StarterPage {

signupPage = SignUpPage;

loginStatus(){
  return false;
}
/*
displayLogin: boolean = false;

onDisplayLogin(){
  if (this.displayLogin == false)
    this.displayLogin = true;
  else
    return;
}*/

}
