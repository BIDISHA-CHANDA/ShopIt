import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartproductlist:any=[];
  constructor(private cartService: CartService){}

  ngOnInit():void{
    this.cartService.getAllCartProduct().subscribe((val: any)=>{
      this.cartproductlist=val;
      this.cartproductlist.forEach((a: any) => {
        Object.assign(a, { quantity: 1, price: a.price });
      });
    },
  )
 }
 delteleItem (item:any){
  this.cartService.deleteFromCartList(item)

 }
 subTotal():number{
  return this.cartService.calculateTotalPrice()
 }
}
