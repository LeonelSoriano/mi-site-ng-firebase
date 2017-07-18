import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Msg } from '../../config/msg';

import {  Router } from '@angular/router';


import {LoginService} from '../../auth/loginService';

declare var $: any;

@Component({    
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

    private _email: string;
    private _password : string;

    constructor(private _loginService : LoginService,
        private _elRef:ElementRef, private _router: Router) {
    }

  ngOnInit() {
  }

    /**
    * metodo para logear
    */
    onLogin(even): void{
	
	let self : LoginComponent = this;

        if($('#form-login').form('is valid')){
            this._elRef.nativeElement.querySelector('#msg-login').style.display = "none";

            $("#loader-login").addClass("active");
            this._loginService.doLogin(this._email, this._password)
                .then(function(res){
			console.log(res);$("#loader-login").removeClass("active");

			self._router.navigate(['dash']);			
		})
                .catch(function(e){console.log(e);$("#loader-login").removeClass("active");});
 
        }else{
            this._elRef.nativeElement.querySelector('#msg-login').style.display = "block";
        }
    }

    ngAfterViewInit(){

     this._elRef.nativeElement.querySelector('#msg-login').style.display = "none";

    $('#form-login')
    .form({
        on: 'blur',
        fields: {
        email: {
            identifier  : 'email',
            rules: [
            {
                type   : 'empty',
                prompt : Msg.REQ_FIELD
            },
            {
                type   : 'email',
                prompt : Msg.EMAIL_FIELD
            }
            ]   
        },
        password: {
            identifier  : 'password',
            rules: [
            {
                type   : 'empty',
                prompt : Msg.REQ_FIELD
            }
            ]
        },
    },
    onSuccess: function(event, fields) {
        event.preventDefault();
    }    
  });


    }//end ngAfterViewInit


    //getter setter
    public get email() : string {
        return this._email;
    }

    
    public set email(email : string) {
        this._email = email;
    }
    

    public get password() : string {
        return this._password;
    }

    public set password(password : string) {
        this._password = password;
    }
    
    

}
