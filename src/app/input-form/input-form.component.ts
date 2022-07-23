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
  formMessageHidden = true;


  constructor(private cm:CommonService) { }

  submit(itemName:any, location:any, lostOrFound:any,email:any, phoneNumber:any,  description:any,  image:any, date:any,  name:any){
    this.cm.postItem( this.itemName, this.location, this.lostOrFound, this.email, this.phoneNumber, this.description,this.image, this.date, this.name).subscribe(data =>{
      this.formMessageHidden = false;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
