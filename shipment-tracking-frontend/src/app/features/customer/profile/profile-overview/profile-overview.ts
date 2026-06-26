import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '../../../../core/services/auth/auth.service';
import { CustomerProfile } from '../../../../core/models/customer-models/CustomerProfile.model';
import { ProfileService, UpdateProfileRequest } from '../../../../core/services/customer/profile.service';

@Component({
  selector: 'app-profile-overview',
  imports: [RouterModule, MatIconModule],
  templateUrl: './profile-overview.html',
  styleUrl: './profile-overview.css',
})
export class ProfileOverview implements OnInit {
  profile = signal<CustomerProfile | null>(null);

  constructor(
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService,
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile().subscribe({
      next: (response) => {
        this.profile.set(response);
        console.log('Profile loaded:', response);
      },
      error: (error) => {
        console.error('Error loading profile:', error);
      },
    });
  }

  updateProfile(data: UpdateProfileRequest) {
    this.profileService.updateProfile(data).subscribe({
      next: (response) => {
        this.profile.set(response);
        console.log('Profile updated:', response);
      },
      error: (error) => {
        console.error('Update error:', error);
      },
    });
  }

  navigateToAddresses() {
    this.router.navigate(['/customer/profile/addresses']);
  }

  navigateToShipments() {
    this.router.navigate(['/customer/my-shipments']);
  }

  navigateToTracking() {
    this.router.navigate(['/customer/track-shipment']);
  }

  logout() {
    this.authService.logout();
  }
}
