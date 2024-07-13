import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://localhost:49991/api';
  
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Add new methods for products
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Product/ProductListing`).pipe(map((result) => result));
  }

  GetProduct(productId: Number)
{
  return this.http.get(`${this.baseUrl}/Product/GetProduct` + "/" + productId).pipe(map(result => result))
}
 // Add new methods for orders
  addOrder(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/Order/AddOrder`, formData);
  }


  GetOrderInfor(email: string): Observable<any> {
    const url = `${this.baseUrl}/Order/GetOrderInfor/${email}`; 
    return this.http.get<any>(url);
  }

   // Add new methods for  client
  getClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Clients`).pipe(map((result) => result));
  }
}
