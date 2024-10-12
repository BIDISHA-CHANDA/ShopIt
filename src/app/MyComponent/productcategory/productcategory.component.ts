import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';
import { ProductdetailsService } from '../../Services/productdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})
export class ProductcategoryComponent implements OnInit {


  constructor(private apiservice:ApiServiceService,private detailSErvice: ProductdetailsService,private router: Router){}
  productCategoryList:any;
 ngOnInit():void{
//console.log("here")
  this.apiservice.getCategoryProduct().subscribe((res:any)=>{
    this.productCategoryList=res.products;
    console.log(this.productCategoryList)

  }

  )




 }
 showDetails(items:any){
  this.detailSErvice.productdetails(items);
  this.router.navigate(['/details']);



 }

}
