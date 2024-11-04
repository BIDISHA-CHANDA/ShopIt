import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart.service';
import { TopCategoriesService } from '../../Services/top-categories.service';
import { ProductdetailsService } from '../../Services/productdetails.service';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent implements OnInit {
  productlist: any[] = [];

  constructor(
    private topProductsService: TopCategoriesService,
    private router: Router,
    private cartService: CartService,
    private detailSErvice:ProductdetailsService
  ) {}

  ngOnInit(): void {
    this.topProductsService.getCategoriesState().subscribe(filteredProducts => {
      console.log('Filtered products received:', filteredProducts);
      this.productlist = filteredProducts;
    });
  }

  addToCart(items: number) {
    this.cartService.addToCartService(items);
  }
  productDetails(items:any){
    this.detailSErvice.productdetails(items);

    this.router.navigateByUrl("/details")
    }
}