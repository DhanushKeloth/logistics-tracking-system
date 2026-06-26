import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomerAddress } from '../../../../core/models/customer-models/CustomerAddress.model';
import { AddressService } from '../../../../core/services/customer/address.service';

@Component({
  selector: 'app-address-form',
  imports: [FormsModule, MatIconModule],
  templateUrl: './address-form.html',
  styleUrl: './address-form.css',
})
export class AddressForm {
  isEditMode = signal(false);

  address = signal<CustomerAddress>({
    label: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    latitude: 0,
    longitude: 0,
    isDefault: false,
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private addressService: AddressService
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode.set(true);

      // Load existing address for edit
      this.addressService.getAddresses().subscribe({
        next: (addresses) => {
          const selectedAddress = addresses.find(
            (address) => address.id === +id
          );

          if (selectedAddress) {
            this.address.set(selectedAddress);
          }
        },
        error: (error) => {
          console.error('Error loading address:', error);
        },
      });
    }
  }

  saveAddress(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    if (this.isEditMode()) {
      this.addressService
        .updateAddress(this.address().id!, {
          label: this.address().label,
          addressLine1: this.address().addressLine1,
          addressLine2: this.address().addressLine2,
          city: this.address().city,
          state: this.address().state,
          postalCode: this.address().postalCode,
          latitude: this.address().latitude,
          longitude: this.address().longitude,
          isDefault: this.address().isDefault,
        })
        .subscribe({
          next: (response) => {
            console.log('Address updated:', response);

            this.router.navigate(['/customer/profile/addresses']);
          },
          error: (error) => {
            console.error('Update error:', error);
          },
        });
    } else {
      this.addressService
        .addAddress({
          label: this.address().label,
          addressLine1: this.address().addressLine1,
          addressLine2: this.address().addressLine2,
          city: this.address().city,
          state: this.address().state,
          postalCode: this.address().postalCode,
          latitude: this.address().latitude,
          longitude: this.address().longitude,
          isDefault: this.address().isDefault,
        })
        .subscribe({
          next: (response) => {
            console.log('Address created:', response);

            this.router.navigate(['/customer/profile/addresses']);
          },
          error: (error) => {
            console.error('Create error:', error);
          },
        });
    }
  }

  cancel() {
    this.router.navigate(['/customer/profile/addresses']);
  }
}