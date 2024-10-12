import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cartlist:any=[];
  productList:any= new BehaviorSubject<any>([])
  
  constructor() {  
    
  }
  getAllCartProduct() {
    return this.productList.asObservable();
}


  addToCartService(item: any) {
      const existingItem = this.cartlist.find((cartItem:any) => cartItem.id === item.id);
    if (existingItem) {
    existingItem.quantity+=1
    } else {
      this.cartlist.push(item);
     
    }
  
    this.productList.next(this.cartlist);
  }

  deleteFromCartList(items:any){
    this.cartlist.map((a:any,index:any)=>{
      if(items.id==a.id){
        this.cartlist.splice(index,1)
      }
    })
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
  
    if (this.cartlist) {
      this.cartlist.forEach((item: any) => {
        totalPrice += item.price * item.quantity;
      });
    }
  
    return totalPrice;
  }
 
 
 


}
