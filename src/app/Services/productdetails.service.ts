import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {
  cartlist:any=[];
  productList:any= new BehaviorSubject<any>([])
  
  constructor() {  
    
  }
  getAllProductDetails() {
    return this.productList.asObservable();
}


  productdetails(item: any) {
    
   
  
    this.productList.next(item);
  }
}
