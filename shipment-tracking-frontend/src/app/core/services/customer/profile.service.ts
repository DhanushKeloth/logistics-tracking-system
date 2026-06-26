import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CustomerProfile } from '../../models/customer-models/CustomerProfile.model';

export interface UpdateProfileRequest {
  phoneNumber: string;
  alternatePhoneNumber: string;
  profileImageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly baseUrl = environment.baseUrl + '/Customer/profile';

  constructor(private http: HttpClient) {}

  // GET profile
  getProfile(): Observable<CustomerProfile> {
    return this.http.get<CustomerProfile>(this.baseUrl);
  }

  // UPDATE profile
  updateProfile(data: UpdateProfileRequest): Observable<CustomerProfile> {
    return this.http.put<CustomerProfile>(this.baseUrl, data);
  }
}
