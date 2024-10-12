import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';
import { CartService } from '../../Services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { ProductdetailsService } from '../../Services/productdetails.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TopCategoriesService } from '../../Services/top-categories.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private apiService: ApiServiceService,private cartService:CartService,private productdetailsService:ProductdetailsService, private router: Router,private top:TopCategoriesService){}
   cartlist:any=[];
   productlist:any;
   electronicsList:any;
   jewelleryList:any
   subscription: Subscription = new Subscription();
   
   ngOnInit(): void {
    this.top.getProductData().subscribe(res => {
      console.log('All products fetched', res);
    }); 

  
this.apiService.getTypeProduct('electronics').subscribe(res=>{
  this.electronicsList=res;
})
this.apiService.getTypeProduct('jewelery').subscribe(res=>{
  this.jewelleryList=res;
})
  }
addToCart(items:any){

this.cartService.addToCartService(items)


}

OnTypeClick(type: string) {
  this.top.filterByType(type);
 // console.log( this.top.filterByType(type))
  this.router.navigateByUrl('/shop');
}
showproductdetails(items:any)
{
  this.productdetailsService.productdetails(items)
  this.router.navigate(['/details']);

}

}
