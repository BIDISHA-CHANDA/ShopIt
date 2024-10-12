import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  productFilteredlist=new BehaviorSubject<any[]>([]);
  productFilteredlist$=this.productFilteredlist.asObservable()
  productList:any[]=[]
  productCategoryList:any[]=[]
  loginProductList:any[]=[]

  constructor(private http: HttpClient) { 

  }
  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products/").pipe(map((res:any[])=>{this.productList=res;return res}))
  }

  getCategoryProduct(){
    return this.http.get<any>("https://dummyjson.com/products").pipe(map((res:any[])=>{this.productCategoryList=res;return res}))
    
  }
 getSaleProducts()
 {
  return this.http.get<any>("https://dummyjson.com/products").pipe(map((res:any[])=>{this.productCategoryList=res;return res}))

 }
 getTypeProduct(type: string){
  return this.http.get<any[]>("https://fakestoreapi.com/products").pipe(
    map((res: any[]) => {
      this.loginProductList = res.filter(product => product.category === type);
      return this.loginProductList;
    })
  );
 }
  filterByType(type: string) {
 //   console.log(this.productList)
   // console.log(type);
   let filterdata;
    if(type==='all'){
      filterdata=this.productList
      
    console.log("all",filterdata)
    }
     else {
    //  console.log("here");
     // console.log(this.productList.filter(product => product.category === type))
     filterdata= this.productList.filter((product )=> {return product.category == type});
    }
    this.productFilteredlist.next(filterdata);
  
    console.log("hi",filterdata)

    
  }
}
