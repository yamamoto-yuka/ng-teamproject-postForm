import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private URL = 'https://cms.yukayamamoto.me/api/lost-and-founds';

  constructor(private http: HttpClient) {}

  postItem(
    itemName: string,
    location: string,
    lostOrFound: string,
    email: string,
    phoneNumber: string,
    description: string,
    imageURL: string,
    date: string,
    name: string
  ) {
    let contactBody = {
      data: {
        Title:itemName,
        Location:location,
        LostOrFound: lostOrFound,
        Email:email,
        Phonenumber:phoneNumber,
        Description: description,
        Image:imageURL,
        Date_found:date,
        Claim_name: name
      },
    };
    return this.http.post(this.URL, contactBody);
  }
}
