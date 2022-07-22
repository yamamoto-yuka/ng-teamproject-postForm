import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  itemName='';
  description ='';
  image='';
  date='';
  location='';
  name='';
  email='';
  phoneNumber='';


  constructor() { }

  
  submit(itemName:any, name:any, description:any, image:any, date:any, location:any, email:any, phoneNumber:any){

  }

  ngOnInit(): void {
  }

}
