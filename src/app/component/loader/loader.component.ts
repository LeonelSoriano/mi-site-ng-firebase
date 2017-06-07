import { Component, OnInit } from '@angular/core';
import { Until } from '../../../until/until';

declare var $: any;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  private _id : string;
  private _isHide: boolean;

  constructor(private _until : Until) { 
    this._id = `loader${this._until.makeid()}`;
    this._isHide = false;

  }

  ngOnInit() {
  }


  public get id() : string {
    return this._id;
  }

  public show(): void{
    this._isHide = false;
  }

  public hide():void{
    this._isHide = true;
  }
  

}
