import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: 'child.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() newCount:number;
  @Input() username:string;
  @Input() nameDoCheck:string;

  constructor(){}

//whenever any change comes from parent component nhOnChages get triggered. 
  ngOnChanges(changes: SimpleChanges){
    console.log("Entered ngOnChanges");
    console.log("ngOnChanges Started", changes);
    //changes comes with current value and previous value.

  }

  ngOnInit(){
    console.log("loads only when components get initialize");
  }

  ngDoCheck(){
    console.log("Entered DoCheck");
    console.log("DoCheck will also detect the changes made for reference type whereas ngOnChange will not detect pass by reference. ngOnChange will detect only pass by value");

  }

  ngAfterContentInit(){
    console.log("Entered ngAfterContentInit");
    console.log("executed only once after the first ngDoCheck()");
  }

  ngAfterContentChecked(){
    console.log("Entered ngAfterContentChecked");
    console.log("executed after ngAfterContentInit() and every after triggered ngDoCheck()");
  }

  ngAfterViewInit(){
    console.log("Entered ngAfterViewInit");
    console.log("Executed after the first ngAfterContentChecked()")
  }

  ngAfterViewChecked(){
    console.log("Entered ngAfterViewChecked");
    console.log("Executed after the ngAfterViewInit() and every after triggered ngAfterContentChecked().")
  }

  ngOnDestroy(){
    console.log("When Component dom elements are removed this method will be called. Can also be used for unsubscribe")

  }




}
