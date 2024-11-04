import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponent/login/login.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { ProductsComponent } from './MyComponent/products/products.component';
import { CartComponent } from './MyComponent/cart/cart.component';
import { ProductcategoryComponent } from './MyComponent/productcategory/productcategory.component';
import { SmartBarChartComponent } from './MyComponent/smart-barchart/smart-barchart.component';
import { ProductsdetailsComponent } from './MyComponent/productsdetails/productsdetails.component';
import { SaleproductComponent } from './MyComponent/saleproduct/saleproduct.component';
import { ShopByCategoryComponent } from './MyComponent/shop-by-category/shop-by-category.component';
const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-category', component: ProductcategoryComponent },
  { path: 'smart-chart', component: SmartBarChartComponent },
  { path: 'details', component: ProductsdetailsComponent },
  { path: 'sale', component: SaleproductComponent },
  { path: 'shop', component: ShopByCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
