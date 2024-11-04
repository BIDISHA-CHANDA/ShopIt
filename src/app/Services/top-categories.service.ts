import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopCategoriesService {

  private productFilteredlist = new BehaviorSubject<any[]>([]);
  private productList: any[] = [];

  constructor(private http: HttpClient) { }

  getProductData(): Observable<any[]> {
    return this.http.get<any[]>("https://fakestoreapi.com/products/").pipe(
      map((res: any[]) => {
        this.productList = res;
        return this.productList;
      })
    );
  }

  filterByType(type: string): void {
            console.log("here",this.productList)

    let filterdata;
    if (type === 'all') {
      filterdata = this.productList;
    } else {
      filterdata = this.productList.filter(product => product.category === type);
    }
    this.productFilteredlist.next(filterdata);
    console.log(`Filtered data for type '${type}':`, filterdata);

  }

  getCategoriesState(): Observable<any[]> {
    return this.productFilteredlist;
  }
}
