import { Component, OnInit } from '@angular/core';

const ROWS_HEIGTH: {[id:number]:number} ={ 1:400, 3: 335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  cols=3;
  rowsHeight=ROWS_HEIGTH[this.cols];
  category: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum:number):void{
    this.cols=colsNum;
    this.rowsHeight=ROWS_HEIGTH[this.cols];
  }

  onShowCategory(newCategory:string):void{
    this.category=newCategory;
  }

}
