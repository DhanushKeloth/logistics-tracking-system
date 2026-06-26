import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CustomerAddress } from '../../models/customer-models/CustomerAddress.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private readonly baseUrl = environment.baseUrl + '/Customer/addresses';

  constructor(private http: HttpClient) {}

  // GET all addresses
  public getAddresses(): Observable<CustomerAddress[]> {
    return this.http.get<CustomerAddress[]>(this.baseUrl);
  }

  public addAddress(address: Omit<CustomerAddress, 'id'>): Observable<CustomerAddress> {
    return this.http.post<CustomerAddress>(this.baseUrl, address);
  }

  // PUT update address
  public updateAddress(id: number, address: Omit<CustomerAddress, 'id'>): Observable<CustomerAddress> {
    return this.http.put<CustomerAddress>(`${this.baseUrl}/${id}`, address);
  }

  // DELETE address
  public deleteAddress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
