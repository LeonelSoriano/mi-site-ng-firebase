import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class Until  {

    /**
     * genera un id unico
     */
    makeid(): string{
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"+
            "0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

}
