import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
;

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Output() notify = new EventEmitter();
    ngOnChanges():void{
        this.starWidth=this.rating*75/5;
    }
    // onClick(){
    //     console.log(`rating is ${this.rating}`); 
    // }

    onClick(){
        this.notify.emit(`${this.rating} star is clicked`)
    }
}   