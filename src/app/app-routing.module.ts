import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoMainComponent } from './MyComponent/todo-main/todo-main.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { ProductsComponent } from './MyComponent/products/products.component';
import { CartComponent } from './MyComponent/cart/cart.component';
import { ProductcategoryComponent } from './MyComponent/productcategory/productcategory.component';
import { SmartBarChartComponent } from './MyComponent/smart-barchart/smart-barchart.component';
import { SmartTableComponent } from './MyComponent/smart-table/smart-table.component';
import { WrappertableComponent } from './MyComponent/wrappertable/wrappertable.component';
import { ProductsdetailsComponent } from './MyComponent/productsdetails/productsdetails.component';
import { SaleproductComponent } from './MyComponent/saleproduct/saleproduct.component';
import { ShopByCategoryComponent } from './MyComponent/shop-by-category/shop-by-category.component';
const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'login',component: LoginComponent},
  {path:'todo-main',component:TodoMainComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:"product-category",component:ProductcategoryComponent},
  {path:"smart-chart",component:SmartBarChartComponent},
  {path:"smart-table",component:SmartTableComponent},
  {path:"wrapper",component:WrappertableComponent},
  {path:"details",component:ProductsdetailsComponent},
  {path:"sale",component:SaleproductComponent},
  {path:"shop",component:ShopByCategoryComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
