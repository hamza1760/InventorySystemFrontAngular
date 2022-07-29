import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemQuantityService {

  constructor(private http: HttpClient) { }

  public getItemQuantity(){
    return this.http.get("http://localhost:8080/itemsinwarehouse/");
  }

}
