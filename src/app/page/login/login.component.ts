import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Msg } from '../../config/msg';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private _afAuth: AngularFireAuth,
        private _elRef:ElementRef) {
       
        this._afAuth.auth.signInWithEmailAndPassword("leonelsoriano3@gmail.com","123456")
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }

  ngOnInit() {
  }

    /**
    * metodo para logear
    */
    onLogin(even): void{

        if($('#form-login').form('is valid')){
            this._elRef.nativeElement.querySelector('#msg-login').style.display = "none";
        }else{
            this._elRef.nativeElement.querySelector('#msg-login').style.display = "block";
        }
        console.log("Logeando");
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



}
