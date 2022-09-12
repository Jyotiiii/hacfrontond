 import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component ({
selector:"app-pagination",
templateUrl: "./pagination.component.html",
styleUrls:['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

@Input () id!: string; //optional
@Input() pageSize: number;
@Input () initPage: number;
@Output () pageChange: EventEmitter<number> = new EventEmitter<number>();
@Output () pageSizeChange: EventEmitter<number>
= new EventEmitter();
constructor() {}


ngOnInit(): void {}

pageSwitch(ev: number) {
this.pageChange.emit(ev);
}

pageCorrection(ev: any) {
this.pageSwitch(ev);
}

pageSizeSwitch(ev: number) {
this.pageSizeChange.emit(ev);
}
}