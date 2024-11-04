import { Component } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';
import { ProductdetailsService } from '../../Services/productdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saleproduct',
  templateUrl: './saleproduct.component.html',
  styleUrl: './saleproduct.component.css'
})
export class SaleproductComponent {
  saleproductlist:any=[];
constructor( private apiservice:ApiServiceService,private productdetailsService:ProductdetailsService,private router:Router ){
this.apiservice.getSaleProducts().subscribe((res:any)=>{
  this.saleproductlist=res.products;
  console.log("hi")

  console.log(this.saleproductlist)
})
}
showproductdetails(items:any)
{
  this.productdetailsService.productdetails(items)
  this.router.navigate(['/details']);

}
}
