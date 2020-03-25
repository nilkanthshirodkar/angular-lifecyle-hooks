import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private counter: number = 0;
  name: string = "hello";

  user = {
    name : "angular"
  }
  
  get count(){
    return this.counter;
  }

  set count(value){
    this.counter = value;
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  changeName(){
    this.name = "world";
  }

  changeNameDoCheck(){
    this.user.name = "Typescript";
  }



}
