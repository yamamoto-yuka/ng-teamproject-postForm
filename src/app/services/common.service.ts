import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private URL = 'https://cms.yukayamamoto.me/api/lost-and-founds';

  constructor(private http: HttpClient) {}

  postItem(
    lostOrFound: string,
    itemName: string,
    description: string,
    imageURL: string,
    date: string,
    location: string,
    name: string,
    email: string,
    phoneNumber: string
  ) {
    let contactBody = {
      data: {
        LostOrFound: lostOrFound,
        Title: itemName,
        Location: location,
        Description: description,
        Image: imageURL,
        Date_found: date,
        Claim_name: name,
        Email: email,
        Phonenumber: phoneNumber,
      },
    };
    return this.http.post(this.URL, contactBody);
  }
}
