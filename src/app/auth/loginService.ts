import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class LoginService  {
    constructor(private _afAuth: AngularFireAuth) {
    }


    public doLogin(email: string, password: string ): firebase.Promise < any >{
        return this._afAuth.auth.signInWithEmailAndPassword(email,password);
    }



}
