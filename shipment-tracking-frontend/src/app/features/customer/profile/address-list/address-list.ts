import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomerAddress } from '../../../../core/models/customer-models/CustomerAddress.model';
import { MatIconModule } from '@angular/material/icon';
import { AddressService } from '../../../../core/services/customer/address.service';

@Component({
  selector: 'app-address-list',
  imports: [RouterModule, MatIconModule],
  templateUrl: './address-list.html',
  styleUrl: './address-list.css',
})
export class AddressList implements OnInit {
  addresses = signal<CustomerAddress[]>([]);

  constructor(
    private router: Router,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.loadAddresses();
  }

  loadAddresses() {
    this.addressService.getAddresses().subscribe({
      next: (response) => {
        this.addresses.set(response);
        console.log('Addresses loaded:', response);
      },
      error: (error) => {
        console.error('Error loading addresses:', error);
      },
    });
  }

  addNewAddress() {
    this.router.navigate(['/customer/profile/addresses/new']);
  }

  editAddress(id: number) {
    this.router.navigate(['/customer/profile/addresses/edit', id]);
  }

  deleteAddress(id: number) {
    this.addressService.deleteAddress(id).subscribe({
      next: () => {
        this.addresses.update((addresses) =>
          addresses.filter((address) => address.id !== id)
        );

        console.log('Address deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting address:', error);
      },
    });
  }
}