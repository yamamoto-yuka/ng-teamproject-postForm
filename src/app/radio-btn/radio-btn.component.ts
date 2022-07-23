import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-radio-btn',
  templateUrl: './radio-btn.component.html',
  styleUrls: ['./radio-btn.component.scss']
})
export class RadioBtnComponent implements OnInit {

  constructor() { }
  lostOrFound='';

  outputBox:boolean = true;
  showValue:boolean = false;

   

   
  submit(lostOrFound:any){
    console.log(lostOrFound);
    console.log(this.lostOrFound);
    this.outputBox = false;
    this.showValue = true;
  }
  
  ngOnInit(): void {
  }

}
