import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { TodosItemComponent } from './MyComponent/todos-item/todos-item.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoMainComponent } from './MyComponent/todo-main/todo-main.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { ProductsComponent } from './MyComponent/products/products.component';
import { CartComponent } from './MyComponent/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductcategoryComponent } from './MyComponent/productcategory/productcategory.component';
import { TableModule } from 'smart-webcomponents-angular/table';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { ProductsdetailsComponent } from './MyComponent/productsdetails/productsdetails.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SaleproductComponent } from './MyComponent/saleproduct/saleproduct.component';
import { ShopByCategoryComponent } from './MyComponent/shop-by-category/shop-by-category.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosItemComponent,
    AddTodoComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    ProductcategoryComponent,
    FooterComponent,
    ProductsdetailsComponent,
    SaleproductComponent,
    ShopByCategoryComponent,
    
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdbCarouselModule,
    CarouselModule.forRoot()

 
    
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
