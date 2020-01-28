import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: IProduct[] = [
    {
      id: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart'
    },
    {
      id: '2',
      pName: 'Resident Evil Nemesis',
      pNameURL: 'Capcom',
      pDesc: 'Remade into AWESOMENESS',
      additionalInfo: 'Yes I stole info',
      price: 'View in Cart'
    },
    {
      id: '3',
      pName: 'Cookies',
      pNameURL: 'NinjaStartszzzzz',
      pDesc: 'HuberCookies',
      additionalInfo: 'They are delicious',
      price: 'View in Cart'
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(sku: string): Observable<IProduct> {
    return of(
    this.products.find(
      x => x.id === sku
    ));
  }
}
