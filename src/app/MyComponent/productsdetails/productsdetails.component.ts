import { Component } from '@angular/core';
import { ProductdetailsService } from '../../Services/productdetails.service';
import {MatButtonModule} from '@angular/material/button'
import { CartService } from '../../Services/cart.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrl: './productsdetails.component.css',
  
})
export class ProductsdetailsComponent {
productdetails:any;

constructor(private productdetailservice:ProductdetailsService,private cartService: CartService){}

ngOnInit(): void {
  
 // console.log("hereinsiiiiiii")
  this.productdetailservice.getAllProductDetails().subscribe((res:any)=>{
    this.productdetails=res;
    console.log(this.productdetails)
  })
}
addToCart(items:any){

  this.cartService.addToCartService(items)
  
  
  }
}
