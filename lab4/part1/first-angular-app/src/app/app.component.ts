import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponentComponent} from "./component/user-component/user-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponentComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  // styles:`
  // :host{
  //   color:royalblue;
  // }
  // `
  // template:`Hello Universe`
  // template:`Hello {{city}},{{1 + 1}}`
  // template:`<app-user-component/>`
  template:`
<!--    @if (isLoggedIn){-->
<!--      <p>Welcome back</p>-->
<!--    }-->
<!--@if(isServerRunning){-->
<!--  <p>now Server is running</p>-->
<!--}@else{-->
<!--  <p>Unfortunately Server is not running,try later</p>-->
<!--}-->
<!--    @for(os of operatingSystems;track os.id){-->
<!--      <p>{{os.name}}</p>-->
<!--    }-->
<!--<div [contentEditable]="isEditable">-->
<!--  edit me!-->
<!--</div>-->

<!--    <button (click)="greet()">Click me</button>-->
<!--    <app-user-component textMessage="my name is Magzhan" (incrementCountEvent)="receiveCountNumber($event)"/>-->
<!--    <p>this is number from child:{{numberFromChild}}</p>-->

    @defer {
      <app-user-component />
    } @placeholder {
      <p>Future comments</p>
    } @loading (minimum 2s) {
      <p>Loading comments...</p>
    }
  `
})
export class AppComponent {
  title = 'first-angular-app';
  city:string = 'Almaty'
  isLoggedIn = true
  isServerRunning = false
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  isEditable = true

  greet() {
    console.log('Hello, there 👋');
  }
  numberFromChild:number = 0
  receiveCountNumber(event:number){
    this.numberFromChild = event;
  }
}
