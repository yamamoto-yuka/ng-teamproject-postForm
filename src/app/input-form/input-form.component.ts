import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  lostOrFound='';
  itemName='';
  description ='';
  image='';
  date='';
  location='';
  name='';
  email='';
  phoneNumber='';


  constructor(private cm:CommonService) { }

  
  submit(lostOrFound:any,itemName:any, description:any, image:any, date:any, location:any, name:any, email:any, phoneNumber:any){
    this.cm.postItem(this.lostOrFound, this.itemName,this.description,this.image, this.date, this.location, this.name, this.email, this.phoneNumber).subscribe(data =>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
